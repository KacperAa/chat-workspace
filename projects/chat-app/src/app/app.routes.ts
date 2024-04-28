import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/access/auth/auth.component').then(c => c.AuthComponent),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/chat/main/chat.routes').then(r => r.CHAT_ROUTES),
  },
];
