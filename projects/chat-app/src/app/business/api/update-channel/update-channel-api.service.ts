import { Injectable, inject } from '@angular/core';
import { ChannelService, ChatClientService } from 'stream-chat-angular';

import { ChannelListElement } from '../channels/channels-list-mapper/models/channel-list-element.model';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateChannelApiService {
  private _channel = inject(ChannelService);
  private _chatService = inject(ChatClientService);

  public updateUserConverstationImage(currentChannel: ChannelListElement) {
    const channel = this._chatService.chatClient.getChannelById('messaging', currentChannel.id, {});

    console.log(channel);

    return from(
      channel.update({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CjYCyPdUF3by-TAEHBHu_06YqHKr3Gl03A&s',
      })
    );
  }
}
