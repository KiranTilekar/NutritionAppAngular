import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ManageFoodComponent } from './pages/manage-food/manage-food.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { MakeMealComponent } from './pages/make-meal/make-meal.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';

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
    },

    {
        path: "adminDashboard",
        title: "Admindashboard",
        component: AdminDashboardComponent
    },

    {
        path: "manageFood",
        title: "ManageFood",
        component: ManageFoodComponent
    },

    {
        path: "addFood",
        title: "AddFood",
        component: AddFoodComponent
    },

    {
        path: "makeMeal",
        title: "MakeMeal",
        component: MakeMealComponent
    },

    {
        path: "foodDetails/:foodId",
        title: "FoodDetails",
        component: FoodDetailsComponent
    }
];
