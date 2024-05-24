import { Injectable, inject } from '@angular/core';
import { ChatClientService } from 'stream-chat-angular';

import { AuthStore } from '../auth/auth.store';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateChannelService {
  private _chatService = inject(ChatClientService);
  private _authStore = inject(AuthStore);

  createChannel(): void {
    console.log('here');
    const channel = this._chatService.chatClient.channel('messaging', 'dupsko', {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Tduspko',
      members: [this._authStore.loggedUser()!.uid],
    });

    from(channel.create());
  }
}
