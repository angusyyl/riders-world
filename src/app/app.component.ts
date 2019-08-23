import { Component, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  //load check points
  checkPoints = [
    { lat: 23.292724, lng: 113.837872, name: '增城二汽客運站', arriveTimestamp: '2019-06-29 13:20', leaveTimestamp: '2019-06-29 13:20', locale: 'zh_cn' },
    { lat: 23.301143, lng: 113.841652, name: '西堤驛站', arriveTimestamp: '2019-06-29 14:00', leaveTimestamp: '2019-06-29 14:15', locale: 'zh_cn' },
    //{lat: 23.272830, lng: 113.823985, name: '增江畫廊', arriveTimestamp: '2019-06-29 14:40', leaveTimestamp: '2019-06-29 15:00', locale: 'zh_cn'},
    { lat: 23.580521, lng: 113.763743, name: '白水寨風景區', arriveTimestamp: '2019-06-29 19:00', leaveTimestamp: '2019-06-29 15:00', locale: 'zh_cn' }
  ];

  chkPtImage = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //url: 'assets/images/bicycle-rider.svg',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32)
  };

  checkPointInfoWindow = new google.maps.InfoWindow({
    content: ''
  });

  //hold check point markers
  checkPointMarkers = [];

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.checkPoints[0].lat, this.checkPoints[0].lng),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.addCheckPointMarkesWithTimeout(800);
  }

  /**
   * create check point markers and display them consecutively
   * @param timeout time in milliseconds between each marker displays
   */
  addCheckPointMarkesWithTimeout(timeout: number): void {
    for (let i = 0; i < this.checkPoints.length; i++) {
      const chkPt = this.checkPoints[i];
      window.setTimeout(() => {
        //create new marker for each check point
        let marker = new google.maps.Marker(
          {
            position: { lat: chkPt.lat, lng: chkPt.lng },
            map: this.map,
            title: chkPt.name,
            animation: google.maps.Animation.DROP,
            draggable: true,
            icon: this.chkPtImage
          });

        marker.addListener('click', () => {
          this.checkPointInfoWindow.close();
          //set check point info window
          let contentHTMLStr = '<div id="infoWindowContent">' + chkPt.name + '</div>' +
                                '<div>Arrive Time:' + chkPt.arriveTimestamp + '</div>' +
                                '<div>Leave Time:' + chkPt.leaveTimestamp + '</div>' +
                                '<div><button class="mat-raised-button mat-warn" color="warn" (click)="showCheckPointDetail()">Details</button></div>';
          this.checkPointInfoWindow.setContent(contentHTMLStr);
          this.checkPointInfoWindow.open(this.map, marker);
        })

        this.checkPointMarkers.push(marker);
      }, i * timeout);
    }
  }

  showCheckPointDetail(): void {
    alert('click');
  }
}
