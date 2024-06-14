import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit, inject, input, output } from '@angular/core';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { AvatarWithStatusComponent } from '@ui/AvatarWithStatusComponent';

import { UserChannelConversationListEl } from '../../../../../../business/api/user-conversation/user-channel-list-el-mapper/models/user-channel-conversation-list-el.model';
import { UserChannelConversationMapperService } from '../../../../../../business/api/user-conversation/user-channel-list-el-mapper/user-channel-list-el-mapper.service';
import { StatusPipe } from '../../pipes/status.pipe';

import { Observable } from 'rxjs';

@Component({
  selector: 'kaa-channel',
  standalone: true,
  templateUrl: './user-channel.component.html',
  styleUrl: './user-channel.component.scss',
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