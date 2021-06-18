import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Todo} from "../models/Todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=12";

  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]> {
    // return [
    //   { id:1, title:'Todo One', completed: false},
    //   { id:2, title:'Todo Two', completed: true},
    //   { id:3, title:'Todo Three', completed: false},
    // ];

    // return this.http.get<Todo[]>(this.todosUrl);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
