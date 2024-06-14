import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit, inject, input, output } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';

import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { AvatarWithStatusComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-status/avatar-with-status.component';
import { UserChannelConversationMapperService } from '../../../../../../../business/api/user-channel-conversation/user-channel-conversation-mapper.service';
import { UserApiService } from '../../../../../../../business/api/users/user-api.service';
import { StatusPipe } from './pipes/status.pipe';

import { Observable, map } from 'rxjs';

@Component({
  selector: 'kaa-channel',
  standalone: true,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
  imports: [AvatarWithContentComponent, AvatarComponent, DatePipe, AsyncPipe, AvatarWithStatusComponent, StatusPipe],
})
export class ChannelComponent implements OnInit {
  public channel = input.required<Channel<DefaultStreamChatGenerics>>();

  private _userChannelMapper = inject(UserChannelConversationMapperService);

  public channelName = input<string>('');
  public channelUrlImage = input<string>('');
  public isUserOnline = input<boolean>(false);

  public isUserOnline$!: Observable<boolean>;

  public onClickChannel = output<unknown>();

  public channelName$!: Observable<string | null>;
  public channelImage$!: Observable<string | null>;

  private _auth = inject(Auth);
  private _userApiService = inject(UserApiService);

  public ngOnInit(): void {
    this._userChannelMapper.mapUserChannelPresentation(this.channel()).subscribe(res => console.log(res));

    this._setChannelPresentation();
  }

  public getLastMessage(): string | null {
    const latestMessages = this.channel().state.latestMessages;
    return latestMessages.length > 0 ? latestMessages[latestMessages.length - 1].text! : null;
  }

  public getLastMessageAt(): string {
    return String(this.channel().data?.last_message_at ?? '');
  }

  private _setChannelPresentation(): void {
    const currentUser = this._auth.currentUser;
    if (!currentUser) {
      throw new Error('Current user not logged in');
    }

    const otherMemberId = this._getOtherMemberId(currentUser.uid);

    this.isUserOnline$ = this._userApiService.getUserFormChat(otherMemberId!).pipe(
      map(response => {
        const user = response.users[0];

        return !!user && !!user.online;
      })
    );

    if (otherMemberId) {
      this.channelImage$ = this._userApiService._getFireUsersDatabase(otherMemberId).pipe(map(user => user.photoURL));
      this.channelName$ = this._userApiService._getFireUsersDatabase(otherMemberId).pipe(map(user => user.displayName));
    }
  }

  private _getOtherMemberId(currentUserId: string): string | undefined {
    const membersArray = Object.values(this.channel().state.members);
    const otherMember = membersArray.find(member => member.user_id !== currentUserId);
    return otherMember?.user?.id;
  }
}
