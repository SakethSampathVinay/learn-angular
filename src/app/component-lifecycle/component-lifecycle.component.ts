import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-component-lifecycle',
  imports: [],
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.css',
})
export class ComponentLifecycleComponent {
  name = 'Saketh';

  @Input() counter: number = 0;

  constructor() {
    console.log('Constructor');
  }

  ngOnIt() {
    console.log('ngOnInit');
    this.name = 'Saketh';
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
