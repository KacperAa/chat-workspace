import { Routes } from '@angular/router';

export const CHAT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./chat.component').then(c => c.ChatComponent),
    children: [
      {
        path: 'conversations',
        loadComponent: () =>
          import('../feature/conversations/chat-user-list/chat-user-list.component').then(c => c.ChannelsComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('../feature/conversation-window/conversation-window.component').then(
            c => c.ConversationWindowComponent
          ),
      },
    ],
  },
];
