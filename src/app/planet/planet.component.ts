import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'oc-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planets;

  nextName = '';

  public onChangePlanetName(planet, nextName): void {
    planet.nextName = nextName;
  }

  public updatePlanetName(planet): void {
    planet.name = planet.nextName;
  }

  constructor() {
    // no change required
  }

  /*
   * TODO STEP TWELVE output the planet size
   * Add a field annotated with the @Output decorator.
   * It's type should be EventEmitter<number> since we want it to emmit the number of planets of this component.
   * Instantiate the field.
   */

  ngOnInit() {
    /*
     * TODO STEP THIRTEEN
     * call the 'emit' function on the field of step twelve with the planet array size
     */
  }

  // Optional task: instead of changing a planets name add a whole new planet on a button press, don't forget to emit the new planet count
  public createPlanet(): void {
    // optional
  }
}
