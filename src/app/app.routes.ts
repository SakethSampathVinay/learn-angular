import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginsComponent } from './logins/logins.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "login", component: LoginsComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: PageNotFoundComponent}
];
