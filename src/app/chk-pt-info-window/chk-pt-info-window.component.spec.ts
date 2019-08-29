import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkPtInfoWindowComponent } from './chk-pt-info-window.component';

describe('ChkPtInfoWindowComponent', () => {
  let component: ChkPtInfoWindowComponent;
  let fixture: ComponentFixture<ChkPtInfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkPtInfoWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkPtInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
