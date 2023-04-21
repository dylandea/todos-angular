import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private todosState: ITodo[] = [];

  constructor() { }


  get todos(): ITodo[] {
    return this.todosState.filter(todo => !todo.isCompleted);
  }

  get todosCompleted(): ITodo[] {
    return this.todosState.filter(todo => todo.isCompleted);
  }

  get countTodos(): number {
    return this.todos.length;
  }

  get countCompleted(): number {
    return this.todosCompleted.length;
  }

  get isHidden(): boolean {
    return this.countCompleted == 0;
  }

  public ngOnInit(): void {
    this.todosState.push({
      id: 0,
      title: 'task 0',
      isCompleted: true
    });
  }

}



