import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-custom-map-control',
  templateUrl: './custom-map-control.component.html',
  styleUrls: ['./custom-map-control.component.css']
})
export class CustomMapControlComponent implements OnInit {

  googleMapRouteChecked: boolean = true;

  onValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('child CustomMapControlComponent ngOnInit()');
  }

  onGoogleMapRouteChange(checked: boolean) {
    this.googleMapRouteChecked = checked;
    this.updateControlOptions();
  }
  // get googleMapRouteChecked(): boolean {
  //   return this._googleMapRouteChecked;
  // }

  // set googleMapRouteChecked(checked: boolean) {
  //   this._googleMapRouteChecked = !checked;
  //   //this.updateControlOptions();
  // }
  
  // toggleChecked(toggleVal: boolean): void {
  //   this._googleMapRouteChecked = toggleVal;
  // }

  updateControlOptions() {
    this.onValueChanged.emit({googleMapRouteChecked: this.googleMapRouteChecked});
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
