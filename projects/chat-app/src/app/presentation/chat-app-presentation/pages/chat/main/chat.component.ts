import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UserCircleComponent } from '../ui/user-circle/user-circle.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [CoreComponent, FilterUsersComponent, UserCircleComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
