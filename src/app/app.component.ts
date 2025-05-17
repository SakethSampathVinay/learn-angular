import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { CounterApplicationComponent } from './counter-application/counter-application.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CounterApplicationComponent]
})
export class AppComponent {
  title = 'learn-angular-youtube';
  x = 10;
  y = 20;
  user1 = "Saketh";
  user2 = "Sampath";
  user3 = "Vinay"
  handleClickEvent() {
    console.log("Handle click event successfully");
    this.otherFunction()
  }

  otherFunction() {
    console.log("Other Function Called");
  }
}

