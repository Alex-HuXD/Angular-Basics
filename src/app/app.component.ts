import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['h2 {color:red;}'],
})
export class AppComponent {
  name = 'Alex';
  imgURL = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }

  changeImg(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logMsg(e: { name: string; payload: string }) {
    console.log(e.payload);
  }
}
