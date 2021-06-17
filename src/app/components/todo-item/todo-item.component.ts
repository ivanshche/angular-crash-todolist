import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() intodoitem!: Todo;

  constructor() { }

  ngOnInit(): void {}

  //set dynamic classes
  setClasses() {
    let classes = {
      somestupidmegaclass: true,
      class2: true,
      todo: true,
      'is-complete': this.intodoitem.completed
    }
    return classes;
  }
}
