import { Routes } from '@angular/router';

export const CHAT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./chat.component').then(c => c.ChatComponent),
    children: [
      // {
      //   path: ':id',
      //   loadComponent: () =>
      //     import('../feature/user-conversation/user-conversation.component').then(c => c.UserConversationComponent),
      // },
      {
        path: 'conversations',
        loadComponent: () =>
          import('../feature/conversations/user-conversations/conversations.component').then(
            c => c.ConversationsComponent
          ),
      },
      {
        path: 'channels',
        loadComponent: () =>
          import('../feature/conversations/channels-conversations/channels.component').then(c => c.ChannelsComponent),
      },
    ],
  },
];
