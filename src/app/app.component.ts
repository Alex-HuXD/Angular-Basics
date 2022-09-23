import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['h2 {color:red;}'],
})
export class AppComponent {
  name = 'alex hu';
  imgURL = 'https://picsum.photos/id/237/500/500';
  date = new Date();
  cost = 2000;
  number = 25.3;
  pizza = {
    topping: 'tomato, cheese',
    size: 'large',
  };

  imgURLs = [
    'https://picsum.photos/id/232/500/500',
    'https://picsum.photos/id/231/500/500',
    'https://picsum.photos/id/233/500/500',
    'https://picsum.photos/id/234/500/500',
    'https://picsum.photos/id/235/500/500',
  ];

  blueClass = false;

  fontSize = 6;

  getName() {
    return this.name;
  }

  changeImg(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logMsg(e: { name: string; payload: string }) {
    console.log(e.payload);
  }

  changeColor(e: MouseEvent) {
    this.blueClass = !this.blueClass;
  }

  //use agular tool to verify that pipe only modify the displayed view but not the stored state
  constructor() {
    console.log(this.date);
  }
}
