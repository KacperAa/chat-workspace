import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

import { User } from '../user/models/user.model';
import { AuthStore } from './auth.store';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, delay, from, of, switchMap, tap } from 'rxjs';

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
  private _firebaseAuth = inject(Auth);

  public signIn(credentials = {}): Observable<User> {
    return of(MOCKUP_LOGGED_USER).pipe(
      delay(2000),
      tap((user: User) => {
        this._authStore.setLoggedUser(user);
      })
    );
  }

  public signUp({ email, password, displayName }: SignupCredentials): Observable<void> {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName }))
    );
  }
}
