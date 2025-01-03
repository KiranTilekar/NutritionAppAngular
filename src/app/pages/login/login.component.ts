import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    RouterLink,
    NgIf,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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

constructor(private userService: UserService, private router: Router) {}

submitForm(form: NgForm) {
  if(form.valid) {
    // console.log(form.value, this.user)
    this.userService.loginUser(this.user)
  }

}

}
