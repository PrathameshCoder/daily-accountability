import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  id: number = 0;
  title: string = "";
  desc: string = "";
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    // Validate title is not empty
    if (this.title.trim() === '') {
      return;

    }
    // Create new todo item
    const todo = {
      id: this.id,
      title: this.title,
      desc: this.desc,
      active: true
    }
    // Emit the new todo item
    this.todoAdd.emit(todo);
    console.log("Title:", this.title);
    console.log("Description:", this.desc);

    // Reset form fields
    this.title = "";
    this.desc = "";
    this.id++;
  }
}
