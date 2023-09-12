import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = new FormControl("");
  password = new FormControl("");
  validation:boolean = false;
  onLogin(){
    if(this.username.value === ""||this.password.value === ""){
      this.validation = true;
    }
    else{
      fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: this.username.value,
          password: this.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Handle successful login here

        } else {
          // Handle failed login here
          alert("User not created");
        }
        return response.json()
      })
      .then(data => {
        console.log(data.jwtData)
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
    }
  }
}
