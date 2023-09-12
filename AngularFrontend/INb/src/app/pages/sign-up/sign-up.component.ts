import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name = new FormControl('');
  Email= new FormControl('');
  Password = new FormControl('');
  Confirmpasswd = new FormControl('');
  cpwdvalidate:boolean = false;
  apiconnection:boolean = false;
  cpassword(event:any){
    if(this.Password.value != this.Confirmpasswd.value){
      this.cpwdvalidate = true;
    }else{
      this.cpwdvalidate = false;
    }
  }
  onSubmit(){
    if(!this.cpwdvalidate){

    }
    console.log("called");
    fetch('http://localhost:5050/api/auth/Create_User', {
      method: 'POST',
      body: JSON.stringify({
        name: this.name.value,
        email: this.Email.value,
        password: this.Password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    .then(response => {
      if(response.ok){
        alert("User Created Sucessfully");
      }
      else{
        alert("USer not created sucessfully");
      }
      return response.json()
      
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
      this.apiconnection = true;
    });
    
  }
}
