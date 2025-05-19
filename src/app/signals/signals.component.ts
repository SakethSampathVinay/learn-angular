import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent {
  count = signal(10);
  x = 20;

  updateValue(val: string) {
    // this.count.set(this.count() + 1);

    if(val === "dec") {
      this.count.set(this.count() - 1);
    } else {
      this.count.set(this.count() + 1);
    }
  }
}
