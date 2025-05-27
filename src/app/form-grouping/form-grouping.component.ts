import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-grouping',
  imports: [ReactiveFormsModule],
  templateUrl: './form-grouping.component.html',
  styleUrl: './form-grouping.component.css',
})
export class FormGroupingComponent {
  profileForm = new FormGroup({
    name: new FormControl('saketh'),
    password: new FormControl('123'),
    email: new FormControl('saketh@test.com'),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setValue() {
    this.profileForm.setValue({
      name: 'Saketh Sampath Vinay',
      password: '456',
      email: 'sakethsampath2006@gmail.com',
    });
  }
}
