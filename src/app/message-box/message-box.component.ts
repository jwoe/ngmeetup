import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'oc-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  selected = 0;
  planets = [
    {image: './assets/00_Sun.png', name: 'Sonne', size: 695700, weight: '1.9885×10^30 kg', temp: '5772 K'},
    {image: './assets/01_Mercury.png', name: 'Mercur', size: 2439, weight: '3.3011×10^23 kg', temp: '340 K'},
    {image: './assets/02_Venus.png', name: 'Venus', size: 6051, weight: '4.8675×10^24 kg', temp: '737 K'},
    {image: './assets/03_Earth.png', name: 'Erde', size: 6371, weight: '5.97237×10^24 kg', temp: '288 K'},
    {image: './assets/04_Mars.png', name: 'Mars', size: 3389, weight: '6.4171×10^23 kg', temp: '210 K'},
    {image: './assets/05_Jupiter.png', name: 'Jupiter', size: 69911, weight: '1.8982×10^27 kg ', temp: '165 K'},
    {image: './assets/06_Saturn.png', name: 'Saturn', size: 58232, weight: '5.6834×10^26 kg', temp: '134 K'},
    {image: './assets/07_Uranus.png', name: 'Uranus', size: 25362, weight: '8.6810×10^25 kg', temp: '76 K'},
    {image: './assets/08_Neptun.png', name: 'Neptun', size: 24622, weight: '1.02413×10^26 kg', temp: '72 K'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  generatePlanetData() {
    this.selected = Math.floor(Math.random() * 9);
  }
}
