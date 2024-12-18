import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = signal<User>( {
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
})

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private router: Router) { }

  getUserData(loginUser: User) : Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginUser)
  }

  loginUser(loginUser: User) : void {

    this.getUserData(loginUser).subscribe({
      next: (response: User) => {

        console.log("user: ", response)        
        this.user.set(response);
        this.router.navigate(["/userDashboard"])
      }, 

      error: (error: Error) => {
        console.log("error: ", error)
      }
    })
  }
}
