import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  county: string = '';
  subscriptionType: string = 'Free User';

  register() {
    // Logic for registration functionality
    console.log('Registration clicked');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phoneNumber);
    console.log('County:', this.county);
    console.log('Subscription Type:', this.subscriptionType);
  }
}
