import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../models/Todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() intodoitem!: Todo;

  constructor(private todoService: TodoService) { }

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

  //toggle
  onToggle(intodoitem: Todo) {
    //toggle in UI
    intodoitem.completed = !intodoitem.completed;
    // console.log(intodoitem.id)

    //toggle on server
    this.todoService.toggleCompleted(intodoitem).subscribe((todo: any) =>
    console.log(todo));
  }

  onDelete(intodoitem: Todo) {
    console.log("OMG delete! what to do??")
  }
}
