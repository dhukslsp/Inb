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
  cpassword(event:any){
    if(this.Password.value != this.Confirmpasswd.value){
      this.cpwdvalidate = true;
    }else{
      this.cpwdvalidate = false;
    }
  }
  onSubmit(result:any){
    console.log("You have entered : " + result.Name); 
  }
}
