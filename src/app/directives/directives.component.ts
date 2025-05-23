import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  show = true;

  students = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  studentsData = [
    {
      name: 'Saketh',
      age: '29',
      email: 'saketh@test.com',
    },
    {
      name: 'Sampath',
      age: '29',
      email: 'saketh@test.com',
    },

    {
      name: 'Vinay',
      age: '29',
      email: 'saketh@test.com',
    },
    {
      name: 'Teja',
      age: '29',
      email: 'saketh@test.com',
    },
    {
      name: 'Arun',
      age: '29',
      email: 'saketh@test.com',
    },
    {
      name: 'Shyamala',
      age: '29',
      email: 'saketh@test.com',
    },
  ];

  login = false;

  color = 'black';
  changeColor(color: string) {
    this.color = color;
  }
}
