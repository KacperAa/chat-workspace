import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {}
