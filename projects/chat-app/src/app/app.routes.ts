import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/access/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./presentation/access/register/register.component').then(c => c.RegisterComponent),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/chat/main/chat.routes').then(r => r.CHAT_ROUTES),
  },
];
