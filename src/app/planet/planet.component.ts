import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'oc-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  name = 'Sonne';
  radius = '1.41×10^18';
  weight = '1.9885×10^30';
  temperature = '5778';
  imageSrc = './assets/00_Sun.png'

  /*
   * TODO STEP TWO: we want to change our planets' name.
   * Update a temporary field with the current text-input and then update our planet name when the button is pressed.
   */
  public keepTrackOfInput(name: string): void {

  }

  // public updatePlanetName ... how do i write a function again?


  /*
   * TODO STEP THREE: replace the individual planet data fields with a single object containing said properties.
   * {name:'', size:, weight}
   * update the binding in the html, you can access object fields with object.field
   */

  /*
   * TODO STEP FIVE: complete our solar-system
   * Wrap our planet object in an array and add some more planets.
   * Fix the binding in the html, you can access an array at position i with: myArray[i].property
   * Done? nice give me a signal and prepare for a short presentation intermission.
   * If you are the first to finish, help out your neighbor three seats to the left.
   */

  constructor() {
    // no change required
  }

  /**
   * TODO EXERCISE FOUR AND MORE ~ step eight
   * If you wish you can continue the exercise here in this component, if you are struggling to keep up or want a clean start for the next
   * exercises: take a look at the donotdead-openinside component.
   * you can continue there (in that case make use of the CHECKPOINT in the app.component.html
   * (display the new component instead of this one)
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
