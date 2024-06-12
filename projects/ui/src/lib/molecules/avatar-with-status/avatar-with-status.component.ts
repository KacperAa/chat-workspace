import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { StatusDot } from './models/status-dot.model';

@Component({
  selector: 'ui-avatar-with-status',
  standalone: true,
  imports: [],
  templateUrl: './avatar-with-status.component.html',
  styleUrl: './avatar-with-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithStatusComponent {
  public status = input<StatusDot>('online');
}
