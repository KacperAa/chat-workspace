import { AvatarWithContentComponent } from '../../../../../../../../ui/src/public-api';
import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [CoreComponent, FilterUsersComponent, AvatarWithContentComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  schemas: [],
})
export class ChatComponent {}
