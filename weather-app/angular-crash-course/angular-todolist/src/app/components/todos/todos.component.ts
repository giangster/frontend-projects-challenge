import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Laundry",
        completed: false
      },
      {
        id: 1,
        title: "Buy socks",
        completed: true
      },
      {
        id: 1,
        title: "Buy grocery",
        completed: false
      }
    ];
  }
}
