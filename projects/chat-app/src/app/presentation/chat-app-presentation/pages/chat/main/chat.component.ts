import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { AvatarComponent } from '../ui/atoms/avatar/avatar.component';
import { AvatarWithContentComponent } from '../ui/molecules/avatar-with-content/avatar-with-content.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [
    CoreComponent,
    FilterUsersComponent,
    AvatarComponent,
    AvatarWithContentComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  schemas: [],
})
export class ChatComponent {}
