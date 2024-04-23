import { Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/avatar-with-content-molecule';

import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [CoreComponent, FilterUsersComponent, AvatarWithContentComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  schemas: [],
})
export class ChatComponent {}
