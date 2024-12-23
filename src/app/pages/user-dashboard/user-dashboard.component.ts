import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  user = this.userService.user

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log("user-dashboard ngONInit")
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem("user")
    if(userData) {
      const parsedUser = JSON.parse(userData)
      this.userService.user.set(parsedUser)
    }
    }
  }
}
