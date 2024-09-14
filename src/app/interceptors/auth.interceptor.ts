import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authServices = inject(AuthService)

  const authToken= authServices.getToken();

  if(authToken){
    const clonedRequest = req.clone({
      setHeaders:{
        'Authorization':`Bearer ${authToken}`
      }
    })
    return next(clonedRequest)
    
  }

  return next(req);
};
