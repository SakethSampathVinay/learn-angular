import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  color: number = 1;


  handleColor(val: number) {
    this.color = val;
  }

  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
