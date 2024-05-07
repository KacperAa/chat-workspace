import { Injectable, inject } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

import { User } from '../user/models/user.model';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, delay, from, of, switchMap } from 'rxjs';

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
  private _firebaseAuth = inject(Auth);

  readonly loggedUser$ = authState(this._firebaseAuth);

  public signIn(credentials = {}): Observable<User> {
    return of(MOCKUP_LOGGED_USER).pipe(delay(2000));
  }

  public signUp({ email, password, displayName }: SignupCredentials): Observable<void> {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName }))
    );
  }
}
