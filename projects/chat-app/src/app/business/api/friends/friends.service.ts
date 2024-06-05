import { Injectable, inject } from '@angular/core';
import { Database, child, get, ref } from '@angular/fire/database';

import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private _database = inject(Database);

  public getFriends(uid: string): Observable<any[]> {
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
