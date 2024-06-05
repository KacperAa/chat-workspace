import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';

import { environment } from '../../../../environments/environment';
import { SigninCredentials } from './models/signin-credentials';
import { SignupCredentials } from './models/signup-credentials';

import { Observable, forkJoin, from, pluck, switchMap } from 'rxjs';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private _firebaseAuth = inject(Auth);
  private _http = inject(HttpClient);
  private _fireDatabase = inject(Database);

  private _defaultUserPicture: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrzeK7cLswnL6YC1rIwMisKdHUs3KWyqKcA&s';

  public getStreamToken() {
    return this._http
      .post<{ token: string }>(`${environment.firebase.apiUrl}/createStreamToken`, {
        user: this._firebaseAuth.currentUser,
      })
      .pipe(pluck('token'));
  }

  public signIn({ email, password }: SigninCredentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this._firebaseAuth, email, password));
  }

  public signUp({ email, password, displayName }: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._firebaseAuth, email, password)).pipe(
      switchMap(({ user }) =>
        forkJoin([
          updateProfile(user, { displayName, photoURL: this._defaultUserPicture }),
          this._writeUserData(user.uid, displayName, this._defaultUserPicture, user.email!),
          this._http.post(`${environment.firebase.apiUrl}/createStreamUser`, {
            user: { ...user, displayName },
          }),
        ])
      )
    );
  }

  public signOut() {
    const user = this._firebaseAuth.currentUser!;

    return from(this._firebaseAuth.signOut()).pipe(
      switchMap(() =>
        this._http.post(`${environment.firebase.apiUrl}/revokeStreamUserToken`, {
          user,
        })
      )
    );
  }

  private _writeUserData(uid: string, displayName: string, photoURL: string, email: string): Observable<void> {
    return from(
      set(ref(this._fireDatabase, 'users/' + uid), {
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      })
    );
  }
}
