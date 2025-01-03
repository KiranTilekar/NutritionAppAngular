import { Component } from '@angular/core';
import { Food } from '../../interfaces/food';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { JsonPipe } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';


@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    InputTextModule,
    DropdownModule,
    JsonPipe,
    MultiSelectModule, 
    FileUploadModule
  ],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent {

  food: Food = {
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
    foodImage: null,
    preference: '',
    measurement: '',
  }

  selectedImageBlob: Blob | undefined;

  measurements = [
    { id: 1, label: '100 g', value: '100 g' },
    { id: 2, label: '1 bowl', value: '1 bowl' },
    { id: 3, label: '1 unit', value: '1 unit'}
  ];

  categories = [
    { id: 1, label: 'For Underweight', value: 'Underweight'},
    { id: 2, label: 'For Overweight', value: 'Overweight'},
    { id: 3, label: 'For Normal Weight', value: 'Normal Weight'}
  ];

  preferences =[
    {id: 1, label: 'Veg', value: 'Veg'},
    {id: 2, label: 'Non Veg', value: 'Non Veg'},
    {id: 3, label: 'Jain', value: 'Jain'},
    {id: 4, label: 'Vegan', value: 'Vegan'},
    {id: 5, label: 'All', value: 'All'}
  ]

  constructor( private foodService: FoodService){}

  onUpload(event: any) {
    const files = event.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.selectedImageBlob = file;
      this.food.foodImage = file; // Add this line
      console.log("Food image file: ", file);
    }
  }

  addFood(form: NgForm) {
    if(form.valid && this.selectedImageBlob) {  // Check if image exists
      console.log("adding food...", form.value);
      this.foodService.addFood(this.food, this.selectedImageBlob);
    } else {
      if (!this.selectedImageBlob) {
        alert("Please select an image");
      }
    }
  }


}
