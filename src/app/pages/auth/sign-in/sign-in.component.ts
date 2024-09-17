import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../../services/toast/toast.service';
import { AuthService } from '../../../services/auth/auth.service';

interface SignInFormValue {
  email: string;
  password: string;
}
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  isLoading = false;
  errorMessage: string | null = null;
  constructor(private router: Router) {}

  toastService = inject(ToastService);
  authService = inject(AuthService);

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.signInForm.invalid) {
      this.toastService.showError('Invalid form');
    } else {
      const { email, password } = this.signInForm.value;
      // Ensure email and password are strings
      const usernameString: string = email ?? '';
      const passwordString: string = password ?? '';

      this.isLoading = true;
      this.errorMessage = null;

      this.authService
        .signIn({ username: usernameString, password: passwordString })
        .subscribe({
          next: (response) => {
            this.toastService.showSuccess(response.message);
            localStorage.setItem('accessToken', response.accessToken);
          },
          error: (error) => {
            this.toastService.showError(
              error.error.message || 'Internal server error!'
            );
          },
          complete: () => {
            this.isLoading = false;
            this.router.navigate(['/dashboard']);
          },
        });
    }
  }
}
