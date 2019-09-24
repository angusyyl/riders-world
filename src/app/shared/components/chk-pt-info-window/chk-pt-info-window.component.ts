import { Component, EventEmitter } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { SwiperOptions } from 'swiper';

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
  
  // swiper component
  public swiperConfig: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    effect: 'fade'
    //lazy: true
  };
  imageUrls: string[] = [];
  imageStyle: any;

  constructor() { }

  ngOnInit(): void {
    console.log('ChkPtInfoWindowComponent ngOnInit()');
    this.imageUrls.push('https://www.dublincycling.com/sites/dublincycling.com/files/styles/flexslider_full/public/images/img_7959.jpg?itok=y8qaScM_');
    this.imageUrls.push('https://i2-prod.dublinlive.ie/incoming/article11972378.ece/ALTERNATES/s615/90338490.jpg');
    this.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOteSUHp5m0Gqm8VmzTi-ktVd9Oq1a0Nr3gucrLuk_Ca0BQVm');
    this.imageUrls.push('assets/images/post-covers/china.jpg');
    this.imageUrls.push('assets/images/post-covers/japan.jpg');
    this.imageUrls.push('assets/images/post-covers/korea.jpg');
    this.imageUrls.push('assets/images/post-covers/thailand.jpg');
  }

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
  //   console.log('ChkPtInfoWindowComponent ngOnChanges()');
  // }

  // ngDoCheck() {
  //   console.log('ChkPtInfoWindowComponent ngDoCheck()');
  // }

  // ngAfterContentInit() {
  //   console.log('ChkPtInfoWindowComponent ngAfterContentInit()');
  // }

  // ngAfterContentChecked() {
  //   console.log('ChkPtInfoWindowComponent ngAfterContentChecked()');
  // }

  // ngAfterViewInit() {
  //   console.log('ChkPtInfoWindowComponent ngAfterViewInit()');
  // }

  // ngAfterViewChecked(){
  //   console.log('ChkPtInfoWindowComponent ngAfterViewChecked()');
  // }

  // showCheckPointDetail(): void {
  //   console.log('showCheckPointDetail being clicked');
  // }

  updateChkPtInfo() {
    this.onValueChanged.emit({id: this._id, name: this._name, arrivalTimestamp: this._arrivalTimestamp, depTimestamp: this._depTimestamp});
  }
}
