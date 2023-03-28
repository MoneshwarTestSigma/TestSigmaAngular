import { Component } from '@angular/core';
import { SignUpTpye } from '../types/AuthSignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    
  
    form : SignUpTpye={
      email: '',
      password: '',
      name: ''
    }
    isSubmitted=false;
    userData : any[]=[];
    temp="";
    i=1;
    submit()
    {
      localStorage.setItem("0"+this.i,JSON.stringify(this.form));
      this.i++;
    }
    clicked()
    {
        this.isSubmitted=true;
    }
}
