import { Injectable, inject } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private _chatService = inject(ChatClientService);

  public getUsersByFilter(queryString: string): Observable<UserResponse<DefaultStreamChatGenerics>[]> {
    return from(this._chatService.autocompleteUsers(queryString));
  }
}
