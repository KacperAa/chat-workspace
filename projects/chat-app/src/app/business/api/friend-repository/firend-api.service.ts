import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { MappedUserFields } from '../auth-repository/models/mapped-user-fields.model';

import { Observable, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class FirendApiService {
  private _auth = inject(Auth);
  private _database = inject(Database);
  private _chat = inject(ChatClientService);

  public getFriendsFromChat(): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return this._getFriendsDatabase().pipe(
      switchMap(friends => {
        if (friends.length === 0) {
          return of([]);
        }

        return this._queryFriends(friends);
      })
    );
  }

  public _getFriendsDatabase(): Observable<MappedUserFields[]> {
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
        }));
      })
    );
  }

  private _queryFriends(friends: MappedUserFields[]): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    const uids = friends.map(friend => friend.uid);

    return from(this._chat.chatClient.queryUsers({ id: { $in: uids } })).pipe(map(response => response.users));
  }
}
