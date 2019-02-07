import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'oc-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planets = [{
    name: 'Sonne',
    radius: '1.41×10^18 km',
    weight: '1.9885×10^30 kg',
    temp: '5778 K',
    image: './assets/00_Sun.png'
  }, {
    name: 'Merkur',
    radius: 'zero',
    weight: '3.301×10^23 kg',
    temp: 'given',
    image: './assets/01_Mercury.png'
  }];

  nextName = '';

  public onChangePlanetName(nextName): void {
    this.nextName = nextName;
  }

  public updatePlanetName(): void {
    this.planets[0].name = this.nextName;
  }

  constructor() {
    // no change required
  }

  /*
   * TODO STEP NINE fix the wrong planet-system size in our app.component.html (@Input and @Output)
   * Move the declaration of the planet array to the app.component.ts
   * Decorate this components planet array with an @Input annotation
   */

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
