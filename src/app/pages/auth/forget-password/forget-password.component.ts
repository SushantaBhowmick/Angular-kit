import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  forgetPassForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  })

  onSubmit() {
    if(this.forgetPassForm.valid){
      console.log('Email',this.forgetPassForm.get('email')?.value)
      console.log(this.forgetPassForm)
    }else{
      console.log('Invalid form')
    }
  }
}
