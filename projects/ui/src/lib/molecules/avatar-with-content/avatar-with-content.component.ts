import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AvatarComponent } from '../../atoms/avatar/avatar.component';

@Component({
  selector: 'ui-avatar-with-content',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './avatar-with-content.component.html',
  styleUrl: './avatar-with-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithContentComponent {}
