import { Routes } from '@angular/router';

export const ADD_FIRENDS_PAGE: Routes = [
  {
    path: '',
    loadComponent: () => import('./add-friends-page.component').then(c => c.AddFriendsPageComponent),
  },
];
