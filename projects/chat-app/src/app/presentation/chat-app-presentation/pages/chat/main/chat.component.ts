import { Component, OnInit, inject } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';
import { SkeletonCircleAndBarsComponent } from '@ui/SkeletonCircleAndBarsComponent';

import { AuthService } from '../../../../../business/api/auth/auth.service';
import { UserHttpService } from '../../../../../business/api/user/user-http.service';
import { CoreComponent } from '../../../core/core.component';
import { ConversationsListSectionComponent } from '../feature/conversations-list-section/conversations-list-section.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UsersHorizontalScrollerComponent } from '../ui/molecules/user-carousel/users-horizontal-scroller.component';
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
  ],
  providers: [ChatFacade],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  readonly chatFacade = inject(ChatFacade);

  private _usersHttp = inject(UserHttpService);
  private _auth = inject(AuthService);

  public ngOnInit(): void {
    this._usersHttp.getUsers().subscribe();
    this._auth.login().subscribe();
  }
}
