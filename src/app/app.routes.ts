import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginsComponent } from './logins/logins.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "login", component: LoginsComponent},
    {path: "contact", component: ContactComponent},
    {path: "profile", component: ProfileComponent, data: {name: "John Doe"}},
    {path: "user/:id/:name", component: UserComponent},
    {path: "**", component: PageNotFoundComponent}
];
