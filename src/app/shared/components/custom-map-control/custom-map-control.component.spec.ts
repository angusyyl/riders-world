import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMapControlComponent } from './custom-map-control.component';

describe('CustomMapControlComponent', () => {
  let component: CustomMapControlComponent;
  let fixture: ComponentFixture<CustomMapControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMapControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMapControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
