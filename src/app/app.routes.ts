import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"dashboard", component:DashboardComponent}
];
