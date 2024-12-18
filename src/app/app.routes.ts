import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

export const routes: Routes = [

    {
        path: "",
        title: "Home",
        component: HomeComponent
    },

    {
        path: "login",
        title: "Login",
        component: LoginComponent
    },

    {
        path: "register",
        title: "Register",
        component: RegisterComponent
    },

    {
        path: "userDashboard",
        title: "UserDashboard",
        component: UserDashboardComponent
    }
];
