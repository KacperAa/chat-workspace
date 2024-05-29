import { Routes } from '@angular/router';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../main/settings/settings.component').then(c => c.SettingsComponent),
  },
];
