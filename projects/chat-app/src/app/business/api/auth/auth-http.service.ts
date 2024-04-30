import { Injectable, inject } from '@angular/core';

import { User } from '../user/models/user.model';
import { AuthStore } from './auth.store';

import { Observable, delay, of, tap } from 'rxjs';

const MOCKUP_LOGGED_USER: User = {
  id: '1',
  firstName: 'Kacper',
  lastName: 'Augustyn',
  email: 'Kacper@Augustyn',
  phoneNum: '123456',
  createdAt: new Date(),
  profilePicture: '../../../../assets/images/profile-img.png',
  activationStatus: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private _authStore = inject(AuthStore);

  public login(): Observable<User> {
    return of(MOCKUP_LOGGED_USER).pipe(
      delay(2000),
      tap((user: User) => {
        this._authStore.setLoggedUser(user);
      })
    );
  }
}
