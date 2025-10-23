import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodosComponent } from '../todos/todos.component';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle = new EventEmitter<Todo>();
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete Clicked");
  }
 onToggle(){
    this.toggle.emit(this.todo);
    console.log("Toggle Clicked");
  }
}
