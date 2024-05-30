import { Injectable, inject } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserProfileApiService {
  private _firebaseAuth = inject(Auth);

  public updateUserPhoto(photoUrl: string): Observable<void> {
    return from(updateProfile(this._firebaseAuth.currentUser!, { photoURL: photoUrl }));
  }
}
