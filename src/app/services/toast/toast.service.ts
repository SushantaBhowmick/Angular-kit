import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  
  // Success Toast
  showSuccess(message: string): void {
    toast.success(message);
  }

  // Error Toast
  showError(message: string): void {
    toast.error(message);
  }

  // Warning Toast
  showWarning(message: string): void {
    toast.warning(message);
  }

  // Info Toast (optional, if supported)
  showInfo(message: string): void {
    toast.info(message);  // Default toast without any specific type
  }
}
