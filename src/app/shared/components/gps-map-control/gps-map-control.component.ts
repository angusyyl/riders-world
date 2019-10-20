import { Component, OnInit, EventEmitter } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-gps-map-control',
  templateUrl: './gps-map-control.component.html',
  styleUrls: ['./gps-map-control.component.css']
})
export class GpsMapControlComponent implements OnInit {

  constructor(private locationService: LocationService) { }
  currentPositionEmitter: EventEmitter<Position> = new EventEmitter();

  ngOnInit() {
  }

  getCurrentLocation() {
    const locationSubscription = this.locationService.getCurrentLocation().subscribe((pos: Position) => {
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      this.currentPositionEmitter.emit(pos);
    }, err => {
      this.handleLocationError();
    }, () => {
      locationSubscription.unsubscribe();
    });
  }

  handleLocationError() {
    alert('Error: Your browser doesn\'t support geolocation');
  }
}
