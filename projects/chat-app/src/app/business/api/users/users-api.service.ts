import { Injectable, inject } from '@angular/core';
import { ChatClientService } from 'stream-chat-angular';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private _chatService = inject(ChatClientService);

  public getAllUsers(): void {}
}
