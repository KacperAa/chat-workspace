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
  {
    path: 'settings',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/settings/main/settings.routes').then(r => r.SETTINGS_ROUTES),
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'friends-list',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/friends-list/main/firends-list-page.routes').then(
        r => r.FRIENDS_LIST_PAGE_ROUTE
      ),
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'add-friends',
    loadChildren: () =>
      import('./presentation/chat-app-presentation/pages/add-friends-page/main/add-firends-page.router').then(
        r => r.ADD_FIRENDS_PAGE
      ),
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
];
