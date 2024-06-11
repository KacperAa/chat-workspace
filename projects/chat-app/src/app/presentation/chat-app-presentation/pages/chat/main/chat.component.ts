import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';
import { SkeletonCircleAndBarsComponent } from '@ui/SkeletonCircleAndBarsComponent';

import { UserHttpService } from '../../../../../business/api/user/user-http.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';
import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UsersHorizontalScrollerComponent } from '../ui/organisms/user-carousel/users-horizontal-scroller.component';
import { ChatFacade } from './chat-facade';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  providers: [ChatFacade],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  imports: [
    RouterOutlet,
    RouterModule,
    CoreComponent,
    FilterUsersComponent,
    AvatarWithContentComponent,
    UsersHorizontalScrollerComponent,
    NavigationBarElementComponent,
    SkeletonCircleAndBarsComponent,
  ],
})
export class ChatComponent implements OnInit {
  protected chatFacade = inject(ChatFacade);

  private _chatInitializer = inject(ChatInitializerService);

  public ngOnInit(): void {
    this._chatInitializer.initChat();
  }
}
