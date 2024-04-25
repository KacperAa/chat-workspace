import { Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';

@Component({
  selector: 'kaa-conversations-list-section',
  standalone: true,
  imports: [AvatarWithContentComponent],
  templateUrl: './conversations-list-section.component.html',
  styleUrl: './conversations-list-section.component.scss',
})
export class ConversationsListSectionComponent {}
