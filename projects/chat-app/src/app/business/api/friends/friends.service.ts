import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { MappedUserFields } from '../auth/models/mapped-user-fields.model';

import { Observable, from, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
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

  private _getFriendsDatabase(): Observable<MappedUserFields[]> {
    const uid = this._auth.currentUser?.uid!;

    const dbRef = ref(this._database);

    return from(get(child(dbRef, `friends/${uid}`))).pipe(
      map(snapshot => {
        const friendsObj = snapshot.val();

        console.log(friendsObj);

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

    const validUids = uids.filter(uid => typeof uid === 'string');

    if (validUids.length !== uids.length) {
      console.error('Niektóre UID nie są typu string:', uids);
      return of([]);
    }

    return from(this._chat.chatClient.queryUsers({ id: { $in: validUids } })).pipe(
      map(response => response.users),
      map(users => this._mapFriends(users, friends))
    );
  }

  private _mapFriends(
    users: UserResponse<DefaultStreamChatGenerics>[],
    friends: MappedUserFields[]
  ): UserResponse<DefaultStreamChatGenerics>[] {
    return users.map(user => {
      const friend = friends.find(friend => friend.uid === user.id);
      return {
        ...user,
        photoURL: friend?.photoURL || user['photoURL'],
      };
    });
  }
}
