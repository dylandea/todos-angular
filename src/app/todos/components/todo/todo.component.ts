import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {ITodo} from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input() todo!: ITodo;
  @Output() todoChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTodo : EventEmitter<number> = new EventEmitter<number>();

  constructor(){}

}
