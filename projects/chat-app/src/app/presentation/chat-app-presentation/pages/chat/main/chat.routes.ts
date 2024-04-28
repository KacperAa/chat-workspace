import { Routes } from '@angular/router';

export const CHAT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./chat.component').then(c => c.ChatComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('../feature/user-conversation/user-conversation.component').then(c => c.UserConversationComponent),
      },
    ],
  },
];
