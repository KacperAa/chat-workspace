import { Injectable, inject } from '@angular/core';

import { UsersStore } from '../../../presentation/chat-app-presentation/pages/chat/users-data/users.store';
import { USERS_MOCKUP } from './mockup-data/user.mockup';
import { User } from './models/user.model';

import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private _usersStore = inject(UsersStore);

  public getUsers(): Observable<User[]> {
    return of(USERS_MOCKUP).pipe(
      delay(500),
      tap((users: User[]) => {
        this._usersStore.setUsers(users);
      })
    );
  }
}
