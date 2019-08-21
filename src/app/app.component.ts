import { Component, ViewChild } from '@angular/core';
import {} from 'googlemaps';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;  
  checkPoints = [
    {lat: 22.3193, lng: 114.1694},    
    {lat: 21.3193, lng: 114.1694}
  ];

  ngOnInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng(22.3193, 114.1694),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.checkPoints.map(chkPt=>{
      var checkPoint = new google.maps.Marker(
        {
          position: {lat: chkPt.lat, lng: chkPt.lng},
          map: this.map
        });
    });
 }
 
}
