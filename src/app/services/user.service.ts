import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // creating user signal for dynamic updation
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

  // url for connecting backend
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private router: Router) { }

  // getting user data from DB if present
  getUserData(loginUser: User) : Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginUser)
  }

  // setting user data to DB
  setUserData(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, {
      name: user.name,
      email: user.email,
      password: user.password,
      loginName: user.loginName,
      height: user.height,
      weight: user.weight,
      bmi: user.bmi,
      category: user.category,
      preference: user.preference
    });
  }


  // register user
  registerUser(user: User) {
    this.setUserData(user).subscribe({
      next: (response: User) => {
        console.log("user registered successfully")
        this.router.navigate(['/login'])
      },
      error: (error) => {
        console.log("registration failed", error)
      }
    })
  }

  

  // login user
  loginUser(loginUser: User) : void {

    this.getUserData(loginUser).subscribe({
      next: (response: User) => {

        if(response != null) {
          console.log("user: ", response)        
          this.user.set(response);
          localStorage.setItem("user", JSON.stringify(response))
          
          if(response.role == 2) {
            this.router.navigate(["/userDashboard"])
          }
          else {
            this.router.navigate(['/adminDashboard'])
          }
        }
        else {
          alert("Invalid credentials")
          this.router.navigate(['/login'])

        }

      }

      // error: (error: Error) => {
      //   console.log("error: ", error)
      //   alert("invalid credentials")
      // }
    })
  }

  // logging out user
  logoutUser() {
    localStorage.removeItem("user")
    this.user.set({
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

  // after logout navigating user to landing page
  this.router.navigate(['/'])
  }
}
