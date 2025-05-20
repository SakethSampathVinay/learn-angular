import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { CounterApplicationComponent } from './counter-application/counter-application.component';
import { GetAndSetInputComponent } from "./get-and-set-input/get-and-set-input.component";
import { IfElseComponent } from "./if-else/if-else.component";
import { SwitchCaseComponent } from "./switch-case/switch-case.component";
import { ForLoopComponent } from "./for-loop/for-loop.component";
import { SignalsComponent } from "./signals/signals.component";
import { SignalsDataTypesComponent } from "./signals-data-types/signals-data-types.component";
import { ComputedSignalsComponent } from "./computed-signals/computed-signals.component";
import { EffectComponent } from "./effect/effect.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [EffectComponent]
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

