import { Routes } from '@angular/router';

export const FRIENDS_LIST_PAGE_ROUTE: Routes = [
  {
    path: '',
    loadComponent: () => import('./firends-list-page.component').then(c => c.FirendsListPageComponent),
  },
];
