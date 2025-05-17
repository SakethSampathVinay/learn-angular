import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-application',
  imports: [],
  templateUrl: './counter-application.component.html',
  styleUrl: './counter-application.component.css',
})
export class CounterApplicationComponent {
  count = 0;

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }

  handleReset() {
    this.count = 0;
  }
}
