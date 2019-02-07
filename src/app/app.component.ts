import {Component} from '@angular/core';

@Component({
  selector: 'oc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
  }, {
    name: 'Erde',
    radius: 'dont',
    weight: 'care',
    temp: 'at all',
    image: './assets/03_Earth.png'
  }];

  public count = 0;

  public onCount(count): void {
    this.count = count;
  }

}
