import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { environment } from '../../../../environments/environment';
import { SigninCredentials } from './models/signin-credentials';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, forkJoin, from, pluck, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private _firebaseAuth = inject(Auth);
  private _http = inject(HttpClient);

  private _defaultUserPicture: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrzeK7cLswnL6YC1rIwMisKdHUs3KWyqKcA&s';

  public getStreamToken() {
    return this._http
      .post<{ token: string }>(`${environment.firebase.apiUrl}/createStreamToken`, {
        user: this._firebaseAuth.currentUser,
      })
      .pipe(pluck('token'));
  }
  public getCurrentUser() {
    return this._firebaseAuth.currentUser!;
  }

  public signIn({ email, password }: SigninCredentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this._firebaseAuth, email, password));
  }

  public signUp({ email, password, displayName }: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) =>
        forkJoin([
          updateProfile(user, { displayName, photoURL: this._defaultUserPicture }),
          this._http.post(`${environment.firebase.apiUrl}/createStreamUser`, {
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
