import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // You can add your styles here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Perform your login logic here
    if (this.username === 'user' && this.password === 'password') {
      console.log('Login successful');
      // Redirect to another page or perform further actions
    } else {
      console.log('Login failed');
      // Show an error message or take other actions
    }
  }
}
