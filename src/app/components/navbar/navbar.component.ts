import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  user = this.userService.user;

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log("navbar ngONInit")
    

    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem("user")

      if(userData) {
        const parsedUser = JSON.parse(userData)
        console.log("parseduser: ", parsedUser)
        this.userService.user.set(parsedUser)
      }
    }
    
  }

  logoutUser() {
    console.log("logout")
    this.userService.logoutUser()
  }

}
