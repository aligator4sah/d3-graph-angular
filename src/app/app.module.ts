import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NglModule} from 'ng-lightning';
import { BaconDirective } from './bacon.directive';
import {LineChartModule} from './basic-chart/line-chart/line-chart.module';
import {BarChartModule} from './basic-chart/bar-chart/bar-chart.module';
import {StackedBarChartModule} from './basic-chart/stacked-bar-chart/stacked-bar-chart.module';

@NgModule({
  declarations: [
    AppComponent,
    BaconDirective
  ],
  imports: [
    BrowserModule,
    LineChartModule,
    BarChartModule,
    StackedBarChartModule,
    NglModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
