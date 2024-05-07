import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./presentation/access/login/login.component').then(c => c.LoginComponent),
    ...canActivate(() => redirectLoggedInTo(['chat'])),
  },
  {
    path: 'register',
    loadComponent: () => import('./presentation/access/register/register.component').then(c => c.RegisterComponent),
    ...canActivate(() => redirectLoggedInTo(['chat'])),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/chat/main/chat.routes').then(r => r.CHAT_ROUTES),
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
];
