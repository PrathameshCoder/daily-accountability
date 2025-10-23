import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Todo } from '../../Todo';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemsComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']  
})
// Component class for managing a list of todos
export class TodosComponent {
  todos: Todo[] = [];
// Initialize todos from local storage if available
  constructor() {
    const saved = localStorage.getItem('todos');
    if (saved && saved.trim()) {
      try {
        const parsed = JSON.parse(saved);
        this.todos = Array.isArray(parsed) ? parsed : [];
      } catch {
        this.todos = [];
      }
    }
  }

  addTodo(todo: Todo) {
    this.todos = [todo, ...this.todos];
    this.persist();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.persist();
  }

  onToggle(todo: Todo) {
    // flip active <-> completed
    todo.active = !todo.active;
    this.persist();               // <-- SAVE AFTER TOGGLE
  }

  private persist() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  trackById = (_: number, t: Todo) => t.id;
}
