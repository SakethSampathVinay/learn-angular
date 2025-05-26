import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: '1',
      name: 'John Doe',
      age: 23,
      email: 'john@test.com',
    },
    {
      id: '2',
      name: 'Saketh Doe',
      age: 23,
      email: 'Saketh@test.com',
    },
    {
      id: '3',
      name: 'Sampath Doe',
      age: 23,
      email: 'Sampath@test.com',
    },
    {
      id: '4',
      name: 'Vinay Doe',
      age: 23,
      email: 'Vinay@test.com',
    },
    {
      id: '5',
      name: 'Teja Doe',
      age: 23,
      email: 'Teja@test.com',
    },
  ];
}
