import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-map-control',
  templateUrl: './custom-map-control.component.html',
  styleUrls: ['./custom-map-control.component.css']
})
export class CustomMapControlComponent implements OnInit {

  private _googleMapRouteChecked: boolean;

  onValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get googleMapRouteChecked(): boolean {
    return this._googleMapRouteChecked;
  }

  set googleMapRouteChecked(checked: boolean) {
    this._googleMapRouteChecked = checked;
    this.updateControlOptions();
  }

  updateControlOptions() {
    this.onValueChanged.emit({googleMapRouteChecked: this._googleMapRouteChecked});
  }
}
