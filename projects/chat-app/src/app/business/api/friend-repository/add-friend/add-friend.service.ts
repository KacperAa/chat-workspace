import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, push, ref, set } from '@angular/fire/database';

import { UserMergedResponse } from '../../user-repository/user/models/user-merged-response.model';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  private _database = inject(Database);

  private _auth = inject(Auth);

  public addToFriend(uid: string, friend: UserMergedResponse): Observable<void> {
    this._addCurrentUserAsFriend(friend.id);

    const friendsRef = ref(this._database, 'friends/' + uid);
    const newFriendRef = push(friendsRef);
    return from(
      set(newFriendRef, {
        uid: friend.id,
        displayName: friend.name,
        photoURL: friend.photoURL,
      })
    );
  }

  private _addCurrentUserAsFriend(friendId: string): Observable<void> {
    const currentUser = this._auth.currentUser!;

    const friendsRef = ref(this._database, 'friends/' + friendId);
    const newFriendRef = push(friendsRef);
    return from(
      set(newFriendRef, {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
      })
    );
  }
}
