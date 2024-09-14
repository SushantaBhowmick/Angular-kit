import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
 
  resetPassForm=new FormGroup({
    newPassword:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required])
  })

  PasswordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if(this.resetPassForm.valid){
      console.log(this.resetPassForm.value)
    }else{
      console.log('Invalid form')
    }
  }
}
