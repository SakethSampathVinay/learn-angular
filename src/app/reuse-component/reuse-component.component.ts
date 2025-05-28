import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-reuse-component',
  imports: [UserComponent],
  templateUrl: './reuse-component.component.html',
  styleUrl: './reuse-component.component.css'
})
export class ReuseComponentComponent {
  usrs = ["Anil", "Saketh", "Sampath", "Vinay"];


}
