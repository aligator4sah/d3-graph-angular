import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {BaconDirective} from './bacon.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'd3-graph-angular';
  extraIngredient: string;

  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective) {
    this.extraIngredient = directive.ingredient;
  }

  @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.extraIngredient);
  }
}
