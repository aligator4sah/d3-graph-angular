import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableChartComponent } from './zoomable-chart.component';

describe('ZoomableChartComponent', () => {
  let component: ZoomableChartComponent;
  let fixture: ComponentFixture<ZoomableChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomableChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
