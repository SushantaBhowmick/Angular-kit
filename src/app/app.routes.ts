import { Routes } from '@angular/router';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UploadComponent } from './pages/upload/upload.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { authRedirectGuard } from './guards/auth-redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent, canActivate: [authRedirectGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [authRedirectGuard] },
  { path: 'forget-password', component: ForgetPasswordComponent, canActivate: [authRedirectGuard] },
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [authRedirectGuard] },

  {
    path: '',
    component: LayoutComponent,
    canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'notification', component: NotificationComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
