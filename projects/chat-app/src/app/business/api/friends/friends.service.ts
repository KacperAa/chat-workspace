import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';

import { MappedUserFields } from '../auth/models/mapped-user-fields.model';

import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private _auth = inject(Auth);
  private _database = inject(Database);

  public getFriends(): Observable<MappedUserFields[]> {
    const uid = this._auth.currentUser?.uid!;

    const dbRef = ref(this._database);

    return from(get(child(dbRef, `friends/${uid}`))).pipe(
      map(snapshot => {
        const friendsObj = snapshot.val();
        if (!friendsObj) {
          return [];
        }

        return Object.keys(friendsObj).map(key => friendsObj[key]);
      })
    );
  }
}
