import { Injectable, inject } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { Database, ref, update } from '@angular/fire/database';

import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserProfileApiService {
  private _firebaseAuth = inject(Auth);
  private _fireDatabase = inject(Database);

  public updateUserPhoto(photoUrl: string): Observable<void> {
    const currentUser = this._firebaseAuth.currentUser!;
    return from(updateProfile(currentUser, { photoURL: photoUrl })).pipe(
      switchMap(() => {
        return this._updateUserDatabase(currentUser.uid, photoUrl);
      })
    );
  }

  private _updateUserDatabase(uid: string, photoUrl: string): Observable<void> {
    const dbRef = ref(this._fireDatabase, `users/${uid}`);
    return from(update(dbRef, { photoURL: photoUrl }));
  }
}
