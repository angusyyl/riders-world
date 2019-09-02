import { Component, ViewChild, ElementRef, NgZone, ComponentRef, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { } from 'googlemaps';
import { ChkPtInfoWindowComponent } from './chk-pt-info-window/chk-pt-info-window.component';
import { CheckPoint } from './shared/models/check-point.model';
import { TransportEnum } from './shared/enums/transport-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('map') mapElement: any;
  // @ViewChild('chkPtInfoWindow', {read: ElementRef}) chkPtinfoWindowElement: ElementRef;
  map: google.maps.Map;
  // info window content dynamically assigned and then appended to chkPtInfoWindow
  chkPtInfoWinCompRef: ComponentRef<ChkPtInfoWindowComponent>;
  chkPtInfoWindow: google.maps.InfoWindow;

  infoWinChkPtId: number;
  infoWinChkPtName: string;
  infoWinChkPtArrivalTimestamp: string;
  infoWinChkPtDepTimestamp: string;

  // load check points
  checkPoints: CheckPoint[] = [
    // { id: 1, lat: 22.531664, lng: 114.114787, name: '羅湖汽車客運站', arrivalTimestamp: new Date(2019,6,29,10,30), depTimestamp: new Date(2019,6,29,10,50), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Train, depTransport: TransportEnum.Bus },
    { id: 1, lat: 23.292724, lng: 113.837872, name: '增城二汽客運站', arrivalTimestamp: new Date(2019, 6, 29, 13, 20), depTimestamp: new Date(2019, 6, 29, 13, 20), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
    { id: 2, lat: 23.301143, lng: 113.841652, name: '西堤驛站', arrivalTimestamp: new Date(2019, 6, 29, 14, 0), depTimestamp: new Date(2019, 6, 29, 14, 16), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
    { id: 3, lat: 23.337663, lng: 113.834488, name: '增江畫廊', arrivalTimestamp: new Date(2019, 6, 29, 14, 39), depTimestamp: new Date(2019, 6, 29, 14, 42), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
    { id: 4, lat: 23.562432, lng: 113.773998, name: '白水寨大家族公館', arrivalTimestamp: new Date(2019, 6, 29, 19, 0), depTimestamp: new Date(2019, 6, 30, 11, 0), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike }
  ];

  icons = {
    chkPt: {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      //url: './assets/images/bicycle-rider.svg',
      // This marker is 20 pixels wide by 32 pixels high.
      scaledSize: new google.maps.Size(20, 32)
    }
  }

  // hold check point markers
  checkPointMarkers = [];

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
    const mapProperties = {
      center: new google.maps.LatLng(this.checkPoints[0].lat, this.checkPoints[0].lng),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    // info window of marker
    this.chkPtInfoWindow = new google.maps.InfoWindow();
    this.addCheckPointMarkesWithTimeout(800);
    
    // transit layer
    const transitLayer = new google.maps.BicyclingLayer();
    transitLayer.setMap(this.map);
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

  /**
   * create check point markers and display them consecutively
   * @param timeout time in milliseconds between each marker displays
   */
  addCheckPointMarkesWithTimeout(timeout: number): void {
    for (let i = 0; i < this.checkPoints.length; i++) {
      const chkPt = this.checkPoints[i];
      window.setTimeout(() => {
        // create new marker for each check point
        const marker = new google.maps.Marker(
          {
            position: { lat: chkPt.lat, lng: chkPt.lng },
            map: this.map,
            title: chkPt.name,
            animation: google.maps.Animation.DROP,
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
        marker.addListener('position_changed', () => {
          this.zone.run(() => this.onCheckPointMarkerDragend(marker, chkPt));
        });

        // add close click event listener to info window
        this.chkPtInfoWindow.addListener('closeclick', _ => {
          this.markerBounceStop(marker);
          this.chkPtInfoWinCompRef.destroy();
        });

        this.checkPointMarkers.push(marker);
      }, i * timeout);
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
    const subscription = this.chkPtInfoWinCompRef.instance.onValueChanged.subscribe((uChkPt: ChkPtInfoWindowComponent) => {
      this.checkPoints.filter(currChkPt => currChkPt.id === uChkPt.id).map(filteredChkPt => {
        filteredChkPt.name = uChkPt.name;
        filteredChkPt.arrivalTimestamp = uChkPt.arrivalTimestamp;
        filteredChkPt.depTimestamp = uChkPt.depTimestamp;
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

    // console.log(chkPt);
  }

  showCheckPointDetail(): void {
    alert('click');
  }
}
