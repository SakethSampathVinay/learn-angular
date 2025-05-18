import { Component } from '@angular/core';

@Component({
  selector: 'app-get-and-set-input',
  imports: [],
  templateUrl: './get-and-set-input.component.html',
  styleUrl: './get-and-set-input.component.css'
})
export class GetAndSetInputComponent {
  name: string= ""
  displayName: string = ""
  email: string= ""

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    console.log(this.name);
  }

  showName() {
    this.displayName = this.name
  }

  setName() {
    this.name = "John Doe"
  }

  showEmail(val: string) {
    console.log(val);
    this.email = val;
  }

  setEmail() {
    this.email = "john.doe@example.com"
  }
} 
