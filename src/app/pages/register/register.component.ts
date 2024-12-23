import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
      userId: 0,
      name: '',
      email: '',
      password: '',
      loginName: '',
      height: 0,
      weight: 0,
      bmi: 0,
      role: 0,
      category: '',
      preference: ''
  }

  confirmPassword!: string;

  constructor(private userService: UserService){}

  calculateBMI(height: number, weight: number) {
    const BMI = +(weight/(height * height)).toFixed(2);
    this.user.bmi = BMI

    if(BMI < 18.5) {
      this.user.category = "Underweight";
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        this.user.category = "Normal Weight"; 
    }
    else {
        this.user.category = "Overweight";
    }
  }

  submitForm(form: NgForm) {
    if(form.valid) {
      console.log("registering...")
      this.calculateBMI(this.user.height, this.user.weight)
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      // this.userService.registerUser(this.user)
    }
  }

  // ----------------------- validations --------------------

}
