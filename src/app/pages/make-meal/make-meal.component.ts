import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../interfaces/food';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-make-meal',
  standalone: true,
  imports: [
    JsonPipe,
    CardModule,
    ButtonModule,
    RouterLink,
    NgIf,
    NgFor
  ],
  templateUrl: './make-meal.component.html',
  styleUrl: './make-meal.component.css'
})
export class MakeMealComponent {

  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.foodService.getAllFoods().subscribe({
      next: (foods: Food[]) => {
        this.foods = foods;
        console.log("all foods", foods)
      },
      error: (error) => {
        console.error('Error loading foods:', error);
      }
    });
  }
}
