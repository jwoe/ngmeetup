import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'oc-donotdead-openinside',
  templateUrl: './donotdead-openinside.component.html',
  styleUrls: ['./donotdead-openinside.component.scss']
})
export class DonotdeadOpeninsideComponent implements OnInit {

  // STEP ONE: add fields for our planet data, .e.g. name, weight
  name: string = 'sun';
  weight: string = '100 kg';
  size: number = 9999;

  /*
   * STEP TWO: we want to change our planets' name.
   * Update a temporary field with the current text-input and then update our planet name when the button is pressed.
   */
  tmpName: String = '';
  public keepTrackOfInput(name: string): void {
    this.tmpName = name;
  }

  // public updatePlanetName ... how do i write a function again?
  public updatePlanetName(): void {
    this.name = this.tmpName;
  }


  /*
   * STEP THREE: replace the individual planet data fields with a single object containing said properties.
   * {name:'', size:, weight}
   * update the binding in the html, you can access object fields with object.field
   */
  planet = {image: './assets/00_Sun.jpg', name: 'Sonne', size: 695700, weight: '1.9885×10^30 kg', temp: '5772 K'};

  /*
   * STEP FIVE: complete our solar-system
   * Wrap our planet object in an array and add some more planets.
   * Fix the binding in the html, you can access an array at position i with: myArray[i].property
   * Done? nice give me a signal and prepare for a short presentation intermission.
   * If you are the first to finish, help out your neighbor three seats to the left.
   */
  planets = [
    {image: './assets/00_Sun.png', name: 'Sonne', size: 695700, weight: '1.9885×10^30 kg', temp: '5772 K'},
    {image: './assets/01_Mercury.png', name: 'Mercur', size: 2439.7, weight: '3.3011×10^23 kg', temp: '340 K'},
    {image: './assets/02_Venus.png', name: 'Venus', size: 6051.8, weight: '4.8675×10^24 kg', temp: '737 K'},
    {image: './assets/03_Earth.png', name: 'Erde', size: 6371.0, weight: '5.97237×10^24 kg', temp: '288 K'},
    {image: './assets/04_Mars.png', name: 'Mars', size: 3389.5, weight: '6.4171×10^23 kg', temp: '210 K'},
    {image: './assets/05_Jupiter.png', name: 'Jupiter', size: 69.911, weight: '1.8982×10^27 kg ', temp: '165 K'},
    {image: './assets/06_Saturn.png', name: 'Saturn', size: 58.232, weight: '5.6834×10^26 kg', temp: '134 K'},
    {image: './assets/07_Uranus.png', name: 'Uranus', size: 25.362, weight: '8.6810×10^25 kg', temp: '76 K'},
    {image: './assets/08_Neptun.png', name: 'Neptun', size: 24.622, weight: '1.02413×10^26 kg', temp: '72 K'}
  ];


  constructor() {
    // no change required
  }

  /**
   * CHECKPOINT BEFORE STEP EIGHT
   */

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
