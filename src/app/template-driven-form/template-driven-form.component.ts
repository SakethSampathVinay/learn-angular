import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  userDetails:any = {}

  addDetails(val: NgForm) {
    console.log("val", val)
    this.userDetails = val;
  } 
}