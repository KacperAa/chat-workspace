import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { SigninCredentials } from './models/signin-credentials';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private _firebaseAuth = inject(Auth);

  readonly loggedUser$ = authState(this._firebaseAuth);

  public signIn({ email, password }: SigninCredentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this._firebaseAuth, email, password));
  }

  public signUp({ email, password, displayName }: SignupCredentials): Observable<void> {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName }))
    );
  }
}
