import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chk-pt-info-window',
  templateUrl: './chk-pt-info-window.component.html',
  styleUrls: ['./chk-pt-info-window.component.css']
})
export class ChkPtInfoWindowComponent {

  private _id: number;
  private _name: string;
  private _arrivalTimestamp: string;
  private _leaveTimestamp: string;

  onValueChanged = new EventEmitter();

  constructor() { }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get arrivalTimestamp(): string {
    return this._arrivalTimestamp;
  }

  set arrivalTimestamp(arrivalTimestamp: string) {
    this._arrivalTimestamp = arrivalTimestamp;
  }

  get leaveTimestamp(): string {
    return this._leaveTimestamp;
  }

  set leaveTimestamp(leaveTimestamp: string) {
    this._leaveTimestamp = leaveTimestamp;
  }

  updateName(e) {
    this._name = e.target.value;
    this.updateChkPtInfo();
  }

  updateArrivalTimestamp(e) {
    this._arrivalTimestamp = e.target.value;
    this.updateChkPtInfo();
  }

  updateLeaveTimestamp(e) {
    this._leaveTimestamp = e.target.value;
    this.updateChkPtInfo();
  }

  // ngOnChanges()	{
  //   console.log('child ngOnChanges()');
  // }

  // ngOnInit(): void {
  //   console.log('child ngOnInit()');
  // }

  // ngDoCheck() {
  //   console.log('child ngDoCheck()');
  // }

  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit()');
  // }

  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked()');
  // }

  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit()');
  // }

  // ngAfterViewChecked(){
  //   console.log('child ngAfterViewChecked()');
  // }

  showCheckPointDetail(): void {
    console.log('showCheckPointDetail being clicked');
  }

  updateChkPtInfo() {
    this.onValueChanged.emit({'id': this._id, 'name': this._name, 'arrivalTimestamp': this._arrivalTimestamp, 'leaveTimestamp': this._leaveTimestamp});
  }
}
