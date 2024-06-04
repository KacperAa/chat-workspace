import { Injectable, inject } from '@angular/core';
import { child, get } from '@angular/fire/database';
import { Database, ref } from '@angular/fire/database';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, from } from 'rxjs';

interface DatabaseResponse {
  email: string;
  photoURL: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _chatService = inject(ChatClientService);
  private _fireDatabase = inject(Database);

  public getUsersByFilter(queryString: string): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return from(this._chatService.autocompleteUsers(queryString));
  }

  private _getFireUsersDatabase(uid: string): Observable<DatabaseResponse> {
    const dbRef = ref(this._fireDatabase);
    return from(
      get(child(dbRef, `users/${uid}`)).then(snapshot => {
        return snapshot.val();
      })
    );
  }
}
