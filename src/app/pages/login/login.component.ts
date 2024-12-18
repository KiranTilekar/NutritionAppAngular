import { Component, signal, Signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
