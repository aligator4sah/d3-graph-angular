import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NglModule} from 'ng-lightning';
import { BaconDirective } from './bacon.directive';

@NgModule({
  declarations: [
    AppComponent,
    BaconDirective
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
