import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Auth } from '@angular/fire/auth';

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
  public channel = input<any>();

  channelImage: string = '';

  constructor(private _auth: Auth) {}

  ngOnInit(): void {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    // Assuming channel.data.members contains user objects with uid, displayName, and photoURL
    const otherMember = this.channel.state.members.find((member: any) => member.user.id !== currentUser.uid);

    if (otherMember) {
      this.channelName = otherMember.user.displayName;
      this.channelImage = otherMember.user.image;
    }
  }
}
