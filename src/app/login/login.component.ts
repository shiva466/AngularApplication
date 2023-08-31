import { Component } from '@angular/core';
import usersData from '../../assets/login.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  users: any[] = usersData;

  constructor(private router: Router) {}
  

  login() {
    const foundUser = this.users.find(user => user.userName === this.username && user.password === this.password);
    if (foundUser) {
      console.log('Login successful');
      this.router.navigate(['/homePage']);
      // Redirect or perform further actions for successful login
    } else {
      alert('Invalid username or password');
      // Display an error message or handle unsuccessful login
    }
  }

  register(){
    this.router.navigate(['/registration']);
  }
}
