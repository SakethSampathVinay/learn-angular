import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos-application',
  imports: [FormsModule],
  templateUrl: './todos-application.component.html',
  styleUrl: './todos-application.component.css',
})
export class TodosApplicationComponent {
  todo: string = '';
  todosList: { id: number; todo: string }[] = [];

  addTask() {
    this.todosList.push({ id: this.todosList.length + 1, todo: this.todo });
    this.todo = '';
    console.log(this.todosList);
  }

  deleteTask(id: number) {
    this.todosList = this.todosList.filter((item) => item.id != id);
    console.log(this.todosList);
  }
}
