import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { SigninCredentials } from './models/signin-credentials';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, forkJoin, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private _firebaseAuth = inject(Auth);
  private _http = inject(HttpClient);

  public signIn({ email, password }: SigninCredentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this._firebaseAuth, email, password));
  }

  public signUp({ email, password, displayName }: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) =>
        forkJoin([
          updateProfile(user, { displayName }),
          this._http.post('https://us-central1-kaa-chat-app.cloudfunctions.net/createStreamUser', {
            user: { ...user, displayName },
          }),
        ])
      )
    );
  }

  public signOut(): Observable<void> {
    return from(this._firebaseAuth.signOut());
  }
}
