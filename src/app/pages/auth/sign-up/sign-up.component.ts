import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 
  signUpForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  onSubmit() {
    if(this.signUpForm.valid){
      console.log('name',this.signUpForm.get('name')?.value)
      console.log('Email',this.signUpForm.get('email')?.value)
      console.log('password',this.signUpForm.get('password')?.value)
      console.log(this.signUpForm.value)
    }else{
      console.log('Invalid form')
    }
  }
}
