import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';

import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { UserApiService } from '../../../../../../../business/api/all-app-users/user-api.service';

import { Observable, map } from 'rxjs';

@Component({
  selector: 'kaa-channel',
  standalone: true,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
  imports: [AvatarWithContentComponent, AvatarComponent, DatePipe, AsyncPipe],
})
export class ChannelComponent implements OnInit {
  public channel = input.required<Channel<DefaultStreamChatGenerics>>();

  channelImage$!: Observable<string | null>;

  channelName$!: Observable<string | null>;

  private _userApiService = inject(UserApiService);

  constructor(private _auth: Auth) {}

  public ngOnInit(): void {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    const membersArray = Object.values(this.channel().state.members);

    const otherMember = membersArray.find((member: any) => member.user_id !== currentUser.uid);

    this.channelImage$ = this._userApiService
      ._getFireUsersDatabase(otherMember?.user?.id!)
      .pipe(map(user => user.photoURL));

    this.channelName$ = this._userApiService
      ._getFireUsersDatabase(otherMember?.user?.id!)
      .pipe(map(user => user.displayName));
  }
}
