import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { MappedUserFields } from '../auth/models/mapped-user-fields.model';

import { Observable, from, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private _auth = inject(Auth);
  private _database = inject(Database);
  private _chat = inject(ChatClientService);

  public getFriends(): Observable<MappedUserFields[]> {
    const uid = this._auth.currentUser?.uid!;
    const dbRef = ref(this._database);

    return from(get(child(dbRef, `friends/${uid}`))).pipe(
      map(snapshot => {
        const friendsObj = snapshot.val();
        if (!friendsObj) {
          return [];
        }

        return Object.keys(friendsObj).map(key => ({
          ...friendsObj[key],
          id: key,
        }));
      })
    );
  }

  public getFriendsFromChat(): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return this.getFriends().pipe(
      switchMap(friends => {
        if (friends.length === 0) {
          return of([]);
        }

        const ids = friends.map(friend => friend.uid);

        return from(this._chat.chatClient.queryUsers({ id: { $in: ids } })).pipe(
          map(response => response.users),
          map(users =>
            users.map(user => {
              const friend = friends.find(f => f.uid === user.id);
              return {
                ...user,
                photoURL: friend ? friend.photoURL : '',
              };
            })
          )
        );
      })
    );
  }
}
