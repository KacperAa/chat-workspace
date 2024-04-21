import { AuthComponent } from './presentation/access/auth/auth.component';
import { CoreComponent } from './presentation/chat-app-presentation/core/core.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'chat', component: CoreComponent },
];
