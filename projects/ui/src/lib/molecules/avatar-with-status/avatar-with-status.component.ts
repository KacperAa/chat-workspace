import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-avatar-with-status',
  standalone: true,
  imports: [],
  templateUrl: './avatar-with-status.component.html',
  styleUrl: './avatar-with-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithStatusComponent {
  public status = input<string>('online');
}
