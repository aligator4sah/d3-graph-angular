import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomableChartComponent } from './zoomable-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZoomableChartComponent],
  exports: [
    ZoomableChartComponent
  ]
})
export class ZoomableChartModule { }
