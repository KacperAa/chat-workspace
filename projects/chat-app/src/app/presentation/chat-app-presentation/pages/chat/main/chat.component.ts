import { Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { NavigationBarElementComponent } from '@ui/NavigationBarElementComponent';

import { CoreComponent } from '../../../core/core.component';
import { FilterUsersComponent } from '../feature/filter-users/filter-users.component';
import { UserCarouselComponent } from '../ui/molecules/user-carousel/user-carousel.component';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [
    CoreComponent,
    FilterUsersComponent,
    AvatarWithContentComponent,
    UserCarouselComponent,
    NavigationBarElementComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
