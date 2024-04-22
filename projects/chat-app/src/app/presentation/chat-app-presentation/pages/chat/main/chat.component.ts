import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [CoreComponent, FilterUsersComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
