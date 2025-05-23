import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {

  bgColor = "green";
  fontSize = "30";
  headingSizeBig = "80px";
  headingSizeSmall = "30px";

  zoom = true;

  updateHeadingSize() {
    this.zoom = !this.zoom;
  }
}
