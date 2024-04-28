import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';

@Component({
  selector: 'kaa-user-conversation',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, AvatarWithContentComponent, MatIcon, AvatarComponent],
  templateUrl: './user-conversation.component.html',
  styleUrl: './user-conversation.component.scss',
})
export class UserConversationComponent {}
