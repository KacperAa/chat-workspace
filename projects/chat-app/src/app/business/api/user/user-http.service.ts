import { Injectable, inject } from '@angular/core';

import { USERS_MOCKUP } from './mockup-data/user.mockup';
import { UserMockup } from './models/user.model';
import { UsersStore } from './users.store';

import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private _usersStore = inject(UsersStore);

  public getUsers(): Observable<UserMockup[]> {
    return of(USERS_MOCKUP).pipe(
      tap((users: UserMockup[]) => {
        this._usersStore.setUsers(users);
      })
    );
  }
}
