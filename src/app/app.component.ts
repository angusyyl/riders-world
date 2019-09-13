import { Component, ViewChild, ElementRef, NgZone, ComponentRef, Injector, ComponentFactoryResolver, ApplicationRef, OnInit, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
import { ChkPtInfoWindowComponent } from './chk-pt-info-window/chk-pt-info-window.component';
import { CustomMapControlComponent } from './custom-map-control/custom-map-control.component';
import { CheckPoint } from './shared/models/check-point.model';
import { TransportEnum } from './shared/enums/transport-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: any;
  @ViewChild('directionPanel') directionPanelElement: any;
  // @ViewChild('chkPtInfoWindow', {read: ElementRef}) chkPtinfoWindowElement: ElementRef;
  map: google.maps.Map;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsRequest: google.maps.DirectionsRequest;
  directionsRendererOptions: google.maps.DirectionsRendererOptions;
  customMapControlCompRef: ComponentRef<CustomMapControlComponent>;
  customMapControlDiv: HTMLDivElement;
  transitLayer: google.maps.BicyclingLayer;
  trafficLayer: google.maps.TrafficLayer;
  // info window content dynamically assigned and then appended to chkPtInfoWindow
  chkPtInfoWinCompRef: ComponentRef<ChkPtInfoWindowComponent>;
  chkPtInfoWindow: google.maps.InfoWindow;

  infoWinChkPtId: number;
  infoWinChkPtName: string;
  infoWinChkPtArrivalTimestamp: string;
  infoWinChkPtDepTimestamp: string;

  // load check points
  // checkPoints: CheckPoint[] = [
  //   // { id: 1, lat: 22.531664, lng: 114.114787, name: '羅湖汽車客運站', arrivalTimestamp: new Date(2019,6,29,10,30), depTimestamp: new Date(2019,6,29,10,50), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Train, depTransport: TransportEnum.Bus },
  //   { id: 1, lat: 23.292724, lng: 113.837872, name: '增城二汽客運站', arrivalTimestamp: new Date(2019, 6, 29, 13, 20), depTimestamp: new Date(2019, 6, 29, 13, 20), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
  //   { id: 2, lat: 23.301143, lng: 113.841652, name: '西堤驛站', arrivalTimestamp: new Date(2019, 6, 29, 14, 0), depTimestamp: new Date(2019, 6, 29, 14, 16), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
  //   { id: 3, lat: 23.337663, lng: 113.834488, name: '增江畫廊', arrivalTimestamp: new Date(2019, 6, 29, 14, 39), depTimestamp: new Date(2019, 6, 29, 14, 42), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
  //   { id: 4, lat: 23.562432, lng: 113.773998, name: '白水寨大家族公館', arrivalTimestamp: new Date(2019, 6, 29, 19, 0), depTimestamp: new Date(2019, 6, 30, 11, 0), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike }
  // ];
  checkPoints: CheckPoint[] = [
    { id: 1, lat: 53.347536, lng: -6.259409, name: '56 O"Connell Street Lower', arrivalTimestamp: new Date(2019, 6, 29, 13, 20), depTimestamp: new Date(2019, 6, 29, 13, 20), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
    { id: 2, lat: 53.345789, lng: -6.235231, name: '70 Sir John Rogerson"s Quay', arrivalTimestamp: new Date(2019, 6, 29, 14, 0), depTimestamp: new Date(2019, 6, 29, 14, 16), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
    { id: 3, lat: 53.348197, lng: -6.227083, name: 'R131', arrivalTimestamp: new Date(2019, 6, 29, 14, 39), depTimestamp: new Date(2019, 6, 29, 14, 42), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike }
  ];

  icons = {
    chkPt: {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // url: './assets/images/bicycle-rider.svg',
      // This marker is 20 pixels wide by 32 pixels high.
      scaledSize: new google.maps.Size(20, 32)
    }
  };

  // hold check point markers
  checkPointMarkers: google.maps.Marker[] = [];

  // ngOnChanges()	{
  //   console.log('parent ngOnChanges()');
  // }

  constructor(private injector: Injector,
              private resolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private zone: NgZone) {
  }

  /**
   * initalize map
   */
  ngOnInit(): void {
    console.log('parent ngDoCheck()');

    // map
    const mapOptions: google.maps.MapOptions = {
      center: new google.maps.LatLng(this.checkPoints[0].lat, this.checkPoints[0].lng),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      scaleControl: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // custom map control
    this.customMapControlDiv = document.createElement('div');

    // info window of marker
    this.chkPtInfoWindow = new google.maps.InfoWindow();

    // add check point markers on map
    this.addCheckPointMarkesWithTimeout(800);

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
    this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer, this.getDirectionsRequest());
  }

  ngAfterViewInit() {
    // this.zone.run(() => this.onCustomMapControlInit());
    setTimeout(() => {
      this.onCustomMapControlInit();
    });
  }

  onCustomMapControlInit() {
    if (this.customMapControlCompRef) { this.customMapControlCompRef.destroy(); }

    // dynamic creation of custom map control component, CustomMapControlComponent should be declared in entryComponents
    const compFactory = this.resolver.resolveComponentFactory(CustomMapControlComponent);
    this.customMapControlCompRef = compFactory.create(this.injector);
    const inst = this.customMapControlCompRef.instance;

    // parent-child communication
    const subscription = this.customMapControlCompRef.instance.onValueChanged.subscribe((updControlOptions: CustomMapControlComponent) => {
      this.directionsRendererOptions = {
        map: this.map,
        suppressMarkers: true,
        suppressPolylines: !updControlOptions.googleMapRouteChecked,
        suppressBicyclingLayer: !updControlOptions.bicycleRouteChecked
      };
      this.directionsRenderer.setOptions(this.directionsRendererOptions);
      
      this.trafficLayer.setMap(updControlOptions.trafficRouteChecked === true ? this.map : null);

      console.log(updControlOptions);
    });

    this.customMapControlDiv.appendChild(this.customMapControlCompRef.location.nativeElement);
    this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(this.customMapControlDiv);

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
  calculateAndDisplayRoute(directionsService: google.maps.DirectionsService, directionsRenderer: google.maps.DirectionsRenderer, directionsReq: google.maps.DirectionsRequest) {
    directionsService.route(directionsReq, (resp, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(resp);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  /**
   * create check point markers and display them consecutively
   * @param timeout time in milliseconds between each marker displays
   */
  addCheckPointMarkesWithTimeout(timeout: number): void {
    for (const chkPt of this.checkPoints) {
      // window.setTimeout(() => {
        // create new marker for each check point
      const marker = new google.maps.Marker(
          {
            position: { lat: chkPt.lat, lng: chkPt.lng },
            map: this.map,
            title: chkPt.name,
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
      // }, i * timeout);
    }
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
      this.checkPoints.filter(currChkPt => currChkPt.id === updChkPt.id).map(filteredChkPt => {
        filteredChkPt.name = updChkPt.name;
        filteredChkPt.arrivalTimestamp = updChkPt.arrivalTimestamp;
        filteredChkPt.depTimestamp = updChkPt.depTimestamp;
      });
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
    this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer, this.getDirectionsRequest());

    // console.log(chkPt);
  }

  showCheckPointDetail(): void {
    alert('click');
  }
}
