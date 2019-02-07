import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'oc-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planets;

  @Output() countEvent = new EventEmitter<Number>();

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

  ngOnInit() {
    this.countEvent.emit(this.planets.length);
  }

  // Optional task: instead of changing a planets name add a whole new planet on a button press, don't forget to emit the new planet count
  public createPlanet(): void {
    // optional
  }
}
