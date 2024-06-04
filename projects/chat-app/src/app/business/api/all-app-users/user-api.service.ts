import { Injectable, inject } from '@angular/core';
import { Database } from '@firebase/database';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _chatService = inject(ChatClientService);
  private _fireDatabase = inject(Database);

  public getUsersByFilter(queryString: string): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return from(this._chatService.autocompleteUsers(queryString));
  }
}
