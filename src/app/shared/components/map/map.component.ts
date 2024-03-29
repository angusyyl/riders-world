import { Component, ViewChild, ElementRef, NgZone, ComponentRef, Injector, ComponentFactoryResolver, ApplicationRef, OnInit, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
import { ChkPtInfoWindowComponent } from '../chk-pt-info-window/chk-pt-info-window.component';
import { CustomMapControlComponent } from '../custom-map-control/custom-map-control.component';
import { CHECKPOINTS } from 'src/app/shared/mock-data/mock-check-points';
import { CheckPoint } from '../../models/check-point.model';
import { TRIPS } from '../../mock-data/mock-trips';
import { Trip } from '../../models/trip.model';
import * as MarkerClusterer from '@google/markerclusterer';
import { CheckPointService } from '../../services/check-point.service';
import { GpsMapControlComponent } from '../gps-map-control/gps-map-control.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: any;
  @ViewChild('placeSearchBox') placeSearchBoxElement: ElementRef;
  @ViewChild('directionPanel') directionPanelElement: any;
  @ViewChild('geolocationControlDiv') geolocationControlElement: ElementRef;
  // @ViewChild('chkPtInfoWindow', {read: ElementRef}) chkPtinfoWindowElement: ElementRef;
  map: google.maps.Map;
  placeSearchBox: google.maps.places.SearchBox;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsRequest: google.maps.DirectionsRequest;
  directionsRendererOptions: google.maps.DirectionsRendererOptions;
  gpsMapControlCompRef: ComponentRef<GpsMapControlComponent>;
  customMapControlCompRef: ComponentRef<CustomMapControlComponent>;
  transitLayer: google.maps.BicyclingLayer;
  trafficLayer: google.maps.TrafficLayer;
  // info window content dynamically assigned and then appended to chkPtInfoWindow
  chkPtInfoWinCompRef: ComponentRef<ChkPtInfoWindowComponent>;
  chkPtInfoWindow: google.maps.InfoWindow;

  infoWinChkPtId: number;
  infoWinChkPtName: string;
  infoWinChkPtArrivalTimestamp: string;
  infoWinChkPtDepTimestamp: string;

  TRIP_MARKER_TITLE = 'Click to display trip route(s)';
  CHECK_POINT_MARKER_TITLE = 'Drag to change location or click to see details';

  // load trips
  trips: Trip[] = TRIPS;

  // load check points
  // checkPoints: CheckPoint[] = CHECKPOINTS;

  icons = {
    chkPt: {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // url: './assets/images/bicycle-rider.svg',
      // This marker is 20 pixels wide by 32 pixels high.
      scaledSize: new google.maps.Size(20, 32)
    },
    trip: {
      url: '/assets/images/trip-icon.png',
      scaledSize: new google.maps.Size(12.7, 9.5)
    }
  };

  // hold trip markers
  tripMarkers: google.maps.Marker[] = [];

  // hold check point markers
  checkPointMarkers: google.maps.Marker[] = [];

  // hold searched place markers
  searchedPlaceMarkers: google.maps.Marker[] = [];

  // ngOnChanges()	{
  //   console.log('parent ngOnChanges()');
  // }

  constructor(private injector: Injector,
              private resolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private zone: NgZone,
              private _checkPointService: CheckPointService) {
  }

  ngOnInit(): void {
    console.log('parent ngOnInit()');
  }

  /**
   * initalize map
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit()');

    // map
    const mapOptions: google.maps.MapOptions = {
      center: new google.maps.LatLng(14.5617, 121.0214),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      scaleControl: true,
      mapTypeControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // place search box
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.placeSearchBoxElement.nativeElement.parentElement);
    this.placeSearchBox = new google.maps.places.SearchBox(this.placeSearchBoxElement.nativeElement);
    // bias the place searchBox results towards current map's viewport.
    this.map.addListener('bounds_changed', ()=>{
      this.placeSearchBox.setBounds(this.map.getBounds());
    });
    this.placeSearchBox.addListener('places_changed', ()=>{
      const placeResults: google.maps.places.PlaceResult[] = this.placeSearchBox.getPlaces();

      if (placeResults.length == 0) {
        return;
      }

      // clear out the old markers
      this.searchedPlaceMarkers.forEach((marker)=>{
        marker.setMap(null);
      });
      this.searchedPlaceMarkers = [];

      // for each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      placeResults.forEach((place)=>{
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        this.searchedPlaceMarkers.push(new google.maps.Marker({
          map: this.map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);

    })

    // info window of marker
    this.chkPtInfoWindow = new google.maps.InfoWindow();

    // add trip markers on map
    this.addTripMarkers();

    const markerCluster = new MarkerClusterer(this.map, this.tripMarkers,
      { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    // add check point markers on map
    // this.addCheckPointMarkes();

    // transit layer
    this.transitLayer = new google.maps.BicyclingLayer();
    this.transitLayer.setMap(null);

    // traffic layer
    this.trafficLayer = new google.maps.TrafficLayer();
    this.trafficLayer.setMap(null);

    // directions service
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRendererOptions = {
      // draggable: true,
      map: this.map,
      suppressMarkers: true,
      suppressPolylines: false,
      suppressBicyclingLayer: true,
      panel: this.directionPanelElement.nativeElement
    };
    this.directionsRenderer = new google.maps.DirectionsRenderer(this.directionsRendererOptions);

    // this.zone.run(() => this.onCustomMapControlInit());
    setTimeout(() => {
      this.onGpsMapControlInit();
      this.onCustomMapControlInit();
    });
  }

  onGpsMapControlInit() {
    if (this.gpsMapControlCompRef) { this.gpsMapControlCompRef.destroy(); }

    // dynamic creation of custom map control component, GpsMapControlComponent should be declared in entryComponents
    const compFactory = this.resolver.resolveComponentFactory(GpsMapControlComponent);
    this.gpsMapControlCompRef = compFactory.create(this.injector);
    const instance = this.gpsMapControlCompRef.instance;

    this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(this.gpsMapControlCompRef.location.nativeElement);

    // parent-child communication
    const subscription = instance.currentPositionEmitter.subscribe((currPos: Position) => {
      this.map.setCenter(new google.maps.LatLng(currPos.coords.latitude, currPos.coords.longitude));
      this.map.setZoom(15);
    });

    this.appRef.attachView(this.gpsMapControlCompRef.hostView);
    this.gpsMapControlCompRef.onDestroy(() => {
      this.appRef.detachView(this.gpsMapControlCompRef.hostView);
      subscription.unsubscribe();
    });
  }

  onCustomMapControlInit() {
    if (this.customMapControlCompRef) { this.customMapControlCompRef.destroy(); }

    // dynamic creation of custom map control component, CustomMapControlComponent should be declared in entryComponents
    const compFactory = this.resolver.resolveComponentFactory(CustomMapControlComponent);
    this.customMapControlCompRef = compFactory.create(this.injector);
    const instance = this.customMapControlCompRef.instance;

    // parent-child communication
    const subscription = instance.onValueChanged.subscribe((updControlOptions: CustomMapControlComponent) => {
      this.directionsRendererOptions = {
        map: this.map,
        suppressMarkers: true,
        suppressPolylines: !updControlOptions.googleMapRouteChecked,
        // suppressBicyclingLayer: !updControlOptions.bicycleRouteChecked
      };
      console.log(this.directionsRendererOptions);
      this.directionsRenderer.setOptions(this.directionsRendererOptions);
      console.log(this.directionsRenderer);

      this.trafficLayer.setMap(updControlOptions.trafficRouteChecked === true ? this.map : null);
      this.transitLayer.setMap(updControlOptions.bicycleRouteChecked === true ? this.map : null);

      console.log(updControlOptions);
    });

    this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(this.customMapControlCompRef.location.nativeElement);

    this.appRef.attachView(this.customMapControlCompRef.hostView);
    this.customMapControlCompRef.onDestroy(() => {
      this.appRef.detachView(this.customMapControlCompRef.hostView);
      subscription.unsubscribe();
    });
  }

  // ngDoCheck() {
  //   console.log('parent ngDoCheck()');
  // }

  // ngAfterContentInit() {
  //   console.log('parent ngAfterContentInit()');
  // }

  // ngAfterContentChecked() {
  //   console.log('parent ngAfterContentChecked()');
  // }

  // ngAfterViewInit() {
  //   console.log('parent ngAfterViewInit()');
  // }

  // ngAfterViewChecked(){
  //   console.log('parent ngAfterViewChecked()');
  // }

  markerBounceStart(marker: google.maps.Marker): void {
    this.allCheckPointMarkersStop();
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }

  markerBounceStop(marker: google.maps.Marker): void {
    marker.setAnimation(null);
  }

  allCheckPointMarkersStop(): void {
    this.checkPointMarkers.forEach(marker => this.markerBounceStop(marker));
  }

  getDirectionsRequest(): google.maps.DirectionsRequest {
    console.log('called getDirectionsRequest');
    const wayPts = this.checkPointMarkers.slice(1, this.checkPointMarkers.length - 1);
    const directionsWaypoints = [];
    for (const wayPt of wayPts) {
      directionsWaypoints.push({
        location: wayPt.getPosition(),
        stopover: true
      });
    }

    this.directionsRequest = {
      origin: this.checkPointMarkers[0].getPosition(),
      destination: this.checkPointMarkers[this.checkPointMarkers.length - 1].getPosition(),
      travelMode: google.maps.TravelMode.BICYCLING,
      waypoints: directionsWaypoints
    };

    return this.directionsRequest;
  }

  // tslint:disable-next-line: max-line-length
  /**
   * Set directions on map
   * @param directionsReq direction request
   */
  calculateAndDisplayRoute(directionsReq: google.maps.DirectionsRequest) {
    console.log('called calculateAndDisplayRoute');
    this.directionsService.route(directionsReq, (resp, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setMap(this.map);
        this.directionsRenderer.setDirections(resp);
      } else {
        this.directionsRenderer.setMap(null);
        this.directionsRenderer.setDirections({geocoded_waypoints: [], routes: []});
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  /**
   * create trip markers
   */
  addTripMarkers(): void {
    for (const trip of this.trips) {
      // create new marker for each trip
      const marker = new google.maps.Marker(
        {
          position: { lat: trip.lat, lng: trip.lng },
          map: this.map,
          title: this.TRIP_MARKER_TITLE
          // icon: this.icons.trip
        }
      );

      // add click event listener to trip marker
      marker.addListener('click', () => {
        // get check points of the trip from Http Request
        const chkPts: CheckPoint[] = [];
        const chkPtSubscription = this._checkPointService.getCheckPoints(trip.id).subscribe(
          response => {
            for (const obj of response) {
              chkPts.push({
                id: obj.id,
                lat: obj.lat,
                lng: obj.lng,
                name: obj.name,
                arrivalTimestamp: obj.arrivalTimestamp,
                depTimestamp: obj.depTimestamp,
                locale: obj.locale,
                routeType: obj.routeType,
                arrivalTransport: obj.arrivalTransport,
                depTransport: obj.depTransport,
                tripId: obj.tripId
              });
            }
            console.log(JSON.stringify(chkPts));
          },
          errorMsg => console.error('Error Msg: ' + errorMsg),
          () => {
            this.removeAllCheckPointMarkers();
            this.removeRenderedDirections();
            this.addCheckPointMarkes(chkPts);
            // render direction route on map
            this.calculateAndDisplayRoute(this.getDirectionsRequest());
          }
        );
      });
      this.tripMarkers.push(marker);
    }
  }

  /**
   * remove rendered directions from the map
   */
  removeRenderedDirections() {
    this.directionsRenderer.setMap(null);
  }

  /**
   * clear all check point markers on the map
   */
  removeAllCheckPointMarkers(): void {
    this.checkPointMarkers.map((marker: google.maps.Marker) => {
      marker.setMap(null);
    });
    this.checkPointMarkers.length = 0;
  }

  /**
   * create check point markers for a viewed trip
   * @param checkPoints check points belong to a trip being viewed
   */
  addCheckPointMarkes(checkPoints: CheckPoint[]): void {
    for (const chkPt of checkPoints) {
      // create new marker for each check point
      const marker = new google.maps.Marker(
        {
          position: { lat: chkPt.lat, lng: chkPt.lng },
          map: this.map,
          title: this.CHECK_POINT_MARKER_TITLE,
          // animation: google.maps.Animation.DROP,
          draggable: true,
          icon: this.icons.chkPt
        }
      );

      // add click event listener to marker
      marker.addListener('click', () => {
        this.zone.run(() => this.onCheckPointMarkerClick(marker, chkPt));
        this.markerBounceStart(marker);
      });

      // add position changed event listener to marker
      marker.addListener('dragend', () => {
        this.zone.run(() => {
          this.onCheckPointMarkerDragend(marker, chkPt);
        });
      });

      // add close click event listener to info window
      this.chkPtInfoWindow.addListener('closeclick', _ => {
        this.markerBounceStop(marker);
        this.chkPtInfoWinCompRef.destroy();
      });

      this.checkPointMarkers.push(marker);
    }

    console.log('Number of check point markers: ' + this.checkPointMarkers.length);
  }

  /**
   * event listener for click event
   * @param marker an anchor of Marker class where the info window positions at
   * @param chkPt a check point to be passed in to display its information on info window
   */
  onCheckPointMarkerClick(marker: google.maps.Marker, chkPt: CheckPoint) {
    if (this.chkPtInfoWinCompRef) { this.chkPtInfoWinCompRef.destroy(); }

    // dynamic creation of info window component, ChkPtInfoWindowComponent should be declared in entryComponents
    const compFactory = this.resolver.resolveComponentFactory(ChkPtInfoWindowComponent);
    this.chkPtInfoWinCompRef = compFactory.create(this.injector);
    this.chkPtInfoWinCompRef.instance.id = chkPt.id;
    this.chkPtInfoWinCompRef.instance.name = chkPt.name;
    this.chkPtInfoWinCompRef.instance.arrivalTimestamp = chkPt.arrivalTimestamp;
    this.chkPtInfoWinCompRef.instance.depTimestamp = chkPt.depTimestamp;

    // parent-child communication
    const subscription = this.chkPtInfoWinCompRef.instance.onValueChanged.subscribe((updChkPt: ChkPtInfoWindowComponent) => {
      chkPt.name = updChkPt.name;
      chkPt.arrivalTimestamp = updChkPt.arrivalTimestamp;
      chkPt.depTimestamp = updChkPt.depTimestamp;
    });

    // set info window content to the dynamically created component
    const div = document.createElement('div');
    div.appendChild(this.chkPtInfoWinCompRef.location.nativeElement);
    this.chkPtInfoWindow.setContent(div);
    this.chkPtInfoWindow.open(this.map, marker);

    this.appRef.attachView(this.chkPtInfoWinCompRef.hostView);
    this.chkPtInfoWinCompRef.onDestroy(() => {
      this.appRef.detachView(this.chkPtInfoWinCompRef.hostView);
      subscription.unsubscribe();
    });
  }

  /**
   * event listener for marker's dragend event
   * @param marker an anchor of Marker class where the info window positions at
   * @param chkPt a check point to be passed in to display its information on info window
   */
  onCheckPointMarkerDragend(marker: google.maps.Marker, chkPt: CheckPoint) {
    chkPt.lat = marker.getPosition().lat();
    chkPt.lng = marker.getPosition().lng();
    this.calculateAndDisplayRoute(this.getDirectionsRequest());

    // console.log(chkPt);
  }

  showCheckPointDetail(): void {
    alert('click');
  }
}
