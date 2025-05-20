import { computeMsgId } from '@angular/compiler';
import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css',
})
export class ComputedSignalsComponent {
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
    this.x.set(1200);
    console.log(this.z());
  }

  updateX() {
    this.x.set(200);
  }
}
