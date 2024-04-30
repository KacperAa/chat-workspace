import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';
import { SkeletonCircleAndBarsComponent } from '@ui/SkeletonCircleAndBarsComponent';

import { AuthHttpService } from '../../../../../business/api/auth/auth-http.service';
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
  public chatFacade = inject(ChatFacade);

  private _usersHttp = inject(UserHttpService);
  private _auth = inject(AuthHttpService);

  public ngOnInit(): void {
    this._usersHttp.getUsers().subscribe();
    this._auth.signIn().subscribe();
  }
}
