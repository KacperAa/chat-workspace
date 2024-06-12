import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ChatClientService } from 'stream-chat-angular';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateChannelService {
  private _chatService = inject(ChatClientService);

  private _auth = inject(Auth);

  public createChannel(): void {
    const channel = this._chatService.chatClient.channel('messaging', 'dupsko', {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Tduspko',
      members: [this._auth.currentUser!.uid],
    });

    from(channel.create());
  }

  public createChannelWithUser(targetUser: { uid: string; displayName: string; photoURL: string }): void {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    const channel = this._chatService.chatClient.channel('messaging', {
      members: [currentUser.uid, targetUser.uid],
      created_by: { id: currentUser.uid },
      extra_data: {
        [currentUser.uid]: {
          nickname: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [targetUser.uid]: {
          nickname: targetUser.displayName,
          photoURL: targetUser.photoURL,
        },
      },
    });

    from(channel.create()).subscribe(
      () => console.log('Channel created successfully'),
      error => console.error('Error creating channel:', error)
    );
  }
}
