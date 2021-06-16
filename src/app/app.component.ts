import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jack Snow';
  // title:string;

  // constructor(
  //   title = '',
  //   isCompleted = false
  // ) {
  //   this.title = title,
  //   this.isCompleted = false
  // }


  x: [string, number] = ['wolfshtain', 42];
}

