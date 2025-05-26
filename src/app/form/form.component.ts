import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = new FormControl('Saketh Sampath Vinay');
  password = new FormControl('123');

  displayValue() {
    console.log("Name: ", this.name.value);
    console.log("Password: ", this.password.value);
  }

  setValues() {
    this.name.setValue("Vinay Sampath Saketh");
    this.password.setValue('456');
  }
}
