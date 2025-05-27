import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-grouping',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-grouping.component.html',
  styleUrl: './form-grouping.component.css',
})
export class FormGroupingComponent {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
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

  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }
}
