import { Injectable, inject } from '@angular/core';
import { APIResponse, UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private _chatService = inject(ChatClientService);

  public getAllUsers(): void {}
}
