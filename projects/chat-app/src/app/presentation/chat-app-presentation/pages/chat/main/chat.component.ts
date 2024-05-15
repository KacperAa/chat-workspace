import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';
import { SkeletonCircleAndBarsComponent } from '@ui/SkeletonCircleAndBarsComponent';

import { environment } from '../../../../../../environments/environment';
import { AuthStore } from '../../../../../business/api/auth/auth.store';
import { UserHttpService } from '../../../../../business/api/user/user-http.service';
import { CoreComponent } from '../../../core/core.component';
import { ConversationsListSectionComponent } from '../feature/conversations-list-section/conversations-list-section.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UsersHorizontalScrollerComponent } from '../ui/organisms/user-carousel/users-horizontal-scroller.component';
import { ChatFacade } from './chat-facade';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [
    CoreComponent,
    FilterUsersComponent,
    AvatarWithContentComponent,
    UsersHorizontalScrollerComponent,
    NavigationBarElementComponent,
    ConversationsListSectionComponent,
    SkeletonCircleAndBarsComponent,
    RouterOutlet,
  ],
  providers: [ChatFacade],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  protected chatFacade = inject(ChatFacade);
  private _auth = inject(AuthStore);

  private _usersHttp = inject(UserHttpService);
  private _chatService: ChatClientService = inject(ChatClientService);
  private _channelService: ChannelService = inject(ChannelService);
  private _streamI18nService: StreamI18nService = inject(StreamI18nService);

  public ngOnInit(): void {
    this._usersHttp.getUsers().subscribe();

    this._chatService.init(environment.stream.key, this._auth.loggedUser()?.uid, this._auth.loggedUser()?.getIdToken);
    this._streamI18nService.setTranslation();
  }
}
