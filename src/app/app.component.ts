import { afterRender, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
import { ForLoopContextualComponent } from "./for-loop-contextual/for-loop-contextual.component";
import { TwowayBindingComponent } from "./twoway-binding/twoway-binding.component";
import { TodosApplicationComponent } from './todos-application/todos-application.component';
import { DynamicStylingComponent } from "./dynamic-styling/dynamic-styling.component";
import { DirectivesComponent } from "./directives/directives.component";
import { RoutingComponent } from "./routing/routing.component";
import { FormComponent } from "./form/form.component";
import { FormGroupingComponent } from "./form-grouping/form-grouping.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { UserComponent } from "./user/user.component";
import { ReuseComponentComponent } from "./reuse-component/reuse-component.component";
import { PipesComponent } from "./pipes/pipes.component";
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';
import { ComponentLifecycleComponent } from "./component-lifecycle/component-lifecycle.component";
import { NgIf } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductServicesComponent } from "./product-services/product-services.component";
import { RestApiServicesComponent } from "./rest-api-services/rest-api-services.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RestApiServicesComponent]
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


  userName = "Bruce"

  onUserChange(user: string) {
    this.userName = user;
  }

  @ViewChild("counters") ComponentLifecycleComponent: any;


  amount = 10;
  counter = 0;

//   constructor() {
//     afterRender(() => {
//       console.log("afterRender", this.ComponentLifecycleComponent.counter);
//     })
//   }

// updateCounter() {
//   this.counter++;
// }
}