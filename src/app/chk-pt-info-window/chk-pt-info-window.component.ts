import { Component, EventEmitter } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-chk-pt-info-window',
  templateUrl: './chk-pt-info-window.component.html',
  styleUrls: ['./chk-pt-info-window.component.css']
})
export class ChkPtInfoWindowComponent {

  private _id: number;
  private _name: string;
  private _arrivalTimestamp: Date;
  private _depTimestamp: Date;

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

  get arrivalTimestamp(): Date {
    return this._arrivalTimestamp;
  }

  set arrivalTimestamp(arrivalTimestamp: Date) {
    this._arrivalTimestamp = arrivalTimestamp;
  }

  get depTimestamp(): Date {
    return this._depTimestamp;
  }

  set depTimestamp(depTimestamp: Date) {
    this._depTimestamp = depTimestamp;
  }

  onNameCHange(value: string) {
    this._name = value;
    this.updateChkPtInfo();
  }

  onTimestampChange(result: Date) {
    if (result[0] === undefined) {
      this._arrivalTimestamp = null;
    } else {
      this._arrivalTimestamp = result[0];
    }
    if (result[1] === undefined) {
      this._depTimestamp = null;
    } else {
      this._depTimestamp = result[1];
    }
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
    this.onValueChanged.emit({id: this._id, name: this._name, arrivalTimestamp: this._arrivalTimestamp, depTimestamp: this._depTimestamp});
  }
}
