import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-custom-map-control',
  templateUrl: './custom-map-control.component.html',
  styleUrls: ['./custom-map-control.component.css']
})
export class CustomMapControlComponent implements OnInit {

  googleMapRouteChecked: boolean = true;
  trafficRouteChecked: boolean = false;
  bicycleRouteChecked: boolean = false;

  onValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('child CustomMapControlComponent ngOnInit()');
  }

  onGoogleMapRouteOptChange(checked: boolean) {
    this.googleMapRouteChecked = checked;
    this.updateControlOptions();
  }

  onTrafficRouteOptChange(checked: boolean) {
    this.trafficRouteChecked = checked;
    this.updateControlOptions();
  }

  onBicycleRouteOptChange(checked: boolean) {
    this.bicycleRouteChecked = checked;
    this.updateControlOptions();
  }

  updateControlOptions() {
    this.onValueChanged.emit({ googleMapRouteChecked: this.googleMapRouteChecked, trafficRouteChecked: this.trafficRouteChecked, bicycleRouteChecked: this.bicycleRouteChecked });
  }

  // ngOnChanges()	{
  //   console.log('child CustomMapControlComponent ngOnChanges()');
  // }

  // ngDoCheck() {
  //   console.log('child CustomMapControlComponent ngDoCheck()');
  // }

  // ngAfterContentInit() {
  //   console.log('child CustomMapControlComponent ngAfterContentInit()');
  // }

  // ngAfterContentChecked() {
  //   console.log('child CustomMapControlComponent ngAfterContentChecked()');
  // }

  // ngAfterViewInit() {
  //   console.log('child CustomMapControlComponent ngAfterViewInit()');
  // }

  // ngAfterViewChecked(){
  //   console.log('child CustomMapControlComponent ngAfterViewChecked()');
  // }
}
