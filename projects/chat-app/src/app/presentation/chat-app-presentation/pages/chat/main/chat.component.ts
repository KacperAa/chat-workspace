import { Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';

import { CoreComponent } from '../../../core/core.component';
import { ConversationsListSectionComponent } from '../feature/conversations-list-section/conversations-list-section.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UsersHorizontalScrollerComponent } from '../ui/molecules/user-carousel/users-horizontal-scroller.component';

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
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
