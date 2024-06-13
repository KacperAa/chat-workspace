import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';

import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';

@Component({
  selector: 'kaa-channel',
  standalone: true,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
  imports: [AvatarWithContentComponent, AvatarComponent, DatePipe],
})
export class ChannelComponent {
  public channel = input.required<Channel<DefaultStreamChatGenerics>>();

  channelImage: string = '';

  constructor(private _auth: Auth) {}

  ngOnInit(): void {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    const membersArray = Object.values(this.channel().state.members);

    const otherMember = membersArray.find((member: any) => member.user_id !== currentUser.uid);

    console.log(this.channel()!.state.members);

    if (otherMember) {
      this.channelImage = otherMember!.user!.image!;
    }
  }
}
