import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private rout:Router, private http:HttpClient){}

  loginData = { 
    email: '',
    password: '' 
  };

  signupData = {
    username: '',
    email: '',
    password: '',
    membershipType: '',
    content: '',
    image: ''
  };
  onLoginSubmit() {
    
  }
  onSignupSubmit() {
    // Implement signup logic here
    console.log('Signup form submitted:', this.signupData);
  }
}
