import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsMapControlComponent } from './gps-map-control.component';

describe('GpsMapControlComponent', () => {
  let component: GpsMapControlComponent;
  let fixture: ComponentFixture<GpsMapControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsMapControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsMapControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
