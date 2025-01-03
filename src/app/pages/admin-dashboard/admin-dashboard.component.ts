import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    DatePipe
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  currentDate = new Date();
  user = this.userService.user
  totalUsers = 0;
  newUsers = 0;
  totalFoodItems = 0;
  totalExercises = 0;
  totalRecipes = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Fetch your statistics here
    this.loadDashboardStats();
  }

  loadDashboardStats() {
    // Add your API calls here to fetch the statistics
    // This is just example data
    this.totalUsers = 6;
    this.newUsers = 0;
    this.totalFoodItems = 1;
    this.totalExercises = 0;
    this.totalRecipes = 0;
  }
}
