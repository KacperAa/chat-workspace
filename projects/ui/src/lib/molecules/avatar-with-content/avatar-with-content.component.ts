import { Component } from '@angular/core';

import { AvatarComponent } from '../../atoms/avatar/avatar.component';

@Component({
  selector: 'ui-avatar-with-content',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './avatar-with-content.component.html',
  styleUrl: './avatar-with-content.component.scss',
  exportAs: 'avatar-with-content-molecule',
})
export class AvatarWithContentComponent {}
