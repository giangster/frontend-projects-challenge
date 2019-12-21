import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(response => {
      this.todos = response;
    });
  }

  deleteTodo(todoToBeDeleted: Todo) {
    this.todoService.deleteTodo(todoToBeDeleted).subscribe();
    this.todos = this.todos.filter(todo => todo.id !== todoToBeDeleted.id);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }
}
