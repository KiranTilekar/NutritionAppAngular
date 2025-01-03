import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../interfaces/food';
import { Observable } from 'rxjs';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // url of endpoint
  private apiUrl = 'http://localhost:8080/food';
  
  constructor(private http: HttpClient, private router: Router) {}

  food = signal<Food>({
    foodId: 0,
    name: '',
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    iron: 0,
    magnesium: 0,
    phosphorous: 0,
    calories: 0,
    category: '',
    foodImage: undefined,
    preference: '',
    measurement: '',
  })


  setFoodData(food: Food, imageBlob?: Blob): Observable<Food> {
    const formData = new FormData();
    
    // Convert food object values to strings
    formData.append('name', food.name);
    formData.append('carbohydrate', food.carbohydrate?.toString() || '0');
    formData.append('protein', food.protein?.toString() || '0');
    formData.append('fat', food.fat?.toString() || '0');
    formData.append('iron', food.iron?.toString() || '0');
    formData.append('magnesium', food.magnesium?.toString() || '0');
    formData.append('phosphorous', food.phosphorous?.toString() || '0');
    formData.append('calories', food.calories?.toString() || '0');
    
    // Extract values from dropdown objects
    formData.append('category', food.category?.value || '');
    formData.append('preference', food.preference?.value || '');
    formData.append('measurement', food.measurement?.value || '');

    if (imageBlob) {
      formData.append('foodImage', imageBlob, 'food-image.jpg');
    }

    return this.http.post<Food>(this.apiUrl, formData);
}

  addFood(food: Food, imageBlob?: Blob) {
    console.log('Sending food data:', food);
    this.setFoodData(food, imageBlob).subscribe({
      next: (response: Food) => {
        alert("Food added successfully");
        this.router.navigate(["/manageFood"])
      },
      error: (error) => {
        console.error('Error adding food:', error);
        alert("Failed to add food");
      }
    });
  }

  getAllFoods() : Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl)
  }
  
}
