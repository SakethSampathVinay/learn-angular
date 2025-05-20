import {
  Component,
  Signal,
  signal,
  WritableSignal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-signals-data-types',
  imports: [],
  templateUrl: './signals-data-types.component.html',
  styleUrl: './signals-data-types.component.css',
})
export class SignalsDataTypesComponent {
  data: WritableSignal<number> = signal(10);
  count: Signal<number> = computed(() => 200);

  updateSignal() {
    // this.data.set(1);
    this.data.update((val) => val + 1)
  }
}
