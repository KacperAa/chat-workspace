import { Injectable, inject, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl } from '@angular/forms';

import { AddFriendService } from '../../../../../business/api/add-friend/add-friend.service';
import { UserMergedResponse } from '../../../../../business/api/users/models/user-merged-response.model';
import { UserApiService } from '../../../../../business/api/users/user-api.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, debounceTime, finalize, startWith, switchMap, tap } from 'rxjs';

@Injectable()
export class AddFriendsPageFacade {
  private _auth = inject(Auth);
  private _userApi = inject(UserApiService);
  private _addFriend = inject(AddFriendService);
  private _chatInitializer = inject(ChatInitializerService);

  public findFriendsControl = new FormControl('', { nonNullable: true });
  public availableUsers = toSignal(this._handleGetUsersInputStream$(), { initialValue: [] });
  public isListLoading = signal(false);

  public initChatApp(): void {
    this._chatInitializer.initChat();
  }

  public addFriend(friend: UserMergedResponse): void {
    const userUid = this._auth.currentUser?.uid!;

    this._addFriend.addToFriend(userUid, friend);
  }

  private _handleGetUsersInputStream$(): Observable<UserMergedResponse[]> {
    return this.findFriendsControl.valueChanges.pipe(
      debounceTime(300),
      tap(() => {
        this.isListLoading.set(true);
      }),
      startWith(''),
      switchMap(queryString => {
        return this._userApi.getUsersByFilter(queryString).pipe(finalize(() => this.isListLoading.set(false)));
      })
    );
  }
}
