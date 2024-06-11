import { Injectable, inject } from '@angular/core';
import { Database, push, ref, set } from '@angular/fire/database';

import { UserMergedResponse } from '../all-app-users/models/user-merged-response.model';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  private _database = inject(Database);

  public addToFriend(uid: string, friend: UserMergedResponse): Observable<void> {
    const friendsRef = ref(this._database, 'friends/' + uid);
    const newFriendRef = push(friendsRef);

    return from(
      set(newFriendRef, {
        uid: friend.id,
        displayName: friend.name,
        online: friend.online,
        photoURL: friend.photoURL,
        email: friend['email'],
      })
    );
  }
}
