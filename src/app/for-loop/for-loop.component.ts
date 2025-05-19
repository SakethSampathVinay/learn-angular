import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  users = ['Saketh', 'Sampath', 'Vinay'];
  students = [
    { name: 'Saketh', age: 20, email: 'saketh@gmail.com' },
    { name: 'Sampath', age: 21, email: 'sam@gmail.com' },
    { name: 'Vinay', age: 22, email: 'vinay@gmail.com' },
    { name: 'Peter', age: 45, email: 'peter@gmail.com' },
  ];

  getName(name: string) {
    console.log(name);
  }
}
