import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit, inject, input, output } from '@angular/core';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';

import { AvatarWithContentComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-content/avatar-with-content.component';
import { AvatarWithStatusComponent } from '../../../../../../../../../../ui/src/lib/molecules/avatar-with-status/avatar-with-status.component';
import { UserChannelConversationListEl } from '../../../../../../../business/api/user-channel-conversation/models/user-channel-conversation-list-el.model';
import { UserChannelConversationMapperService } from '../../../../../../../business/api/user-channel-conversation/user-channel-conversation-mapper.service';
import { StatusPipe } from './pipes/status.pipe';

import { Observable } from 'rxjs';

@Component({
  selector: 'kaa-channel',
  standalone: true,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss',
  imports: [AvatarWithContentComponent, AvatarComponent, DatePipe, AsyncPipe, AvatarWithStatusComponent, StatusPipe],
})
export class ChannelComponent implements OnInit {
  private _userChannelMapper = inject(UserChannelConversationMapperService);

  public channel = input.required<Channel<DefaultStreamChatGenerics>>();

  public mappedChannelElData$!: Observable<UserChannelConversationListEl>;

  public onClickChannel = output<unknown>();

  public ngOnInit(): void {
    this.mappedChannelElData$ = this._userChannelMapper.mapUserChannelPresentation(this.channel());
  }
}
