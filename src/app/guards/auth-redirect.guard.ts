import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if (authService.isLoggedIn()) {
    // Redirect to default protected route if user is authenticated
    router.navigate(['/dashboard']); // Set your default protected route here
    return false; // Deny navigation to the route
  } else {
    return true; // Allow navigation if the user is not authenticated
  }
};
