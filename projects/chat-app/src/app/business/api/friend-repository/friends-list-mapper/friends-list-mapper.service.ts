import { Injectable, inject } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { MappedUserFields } from '../../auth-repository/models/mapped-user-fields.model';
import { FirendApiService } from '../firend-api.service';

import { Observable, map, switchMap } from 'rxjs';

@Injectable()
export class FriendsListMapperService {
  private _friendApi = inject(FirendApiService);

  public mapToFriendsList(): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return this._friendApi
      .getFriendsFromChat()
      .pipe(
        switchMap(chatUsers =>
          this._friendApi._getFriendsDatabase().pipe(map(fireFriends => this._mapFriends(chatUsers, fireFriends)))
        )
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
