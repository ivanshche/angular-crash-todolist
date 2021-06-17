import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  title:string = "Tu turu ru Todo";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      { id:1, title:'Todo One', completed: false},
      { id:2, title:'Todo Two', completed: true},
      { id:3, title:'Todo Three', completed: false},
    ];

    // enum dir {
    //   up = 8,
    //   down = 5,
    //   left= 4,
    //   right = 6
    // }
    // console.log(dir.up, dir.down)
  }

}
