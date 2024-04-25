import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [AvatarWithContentComponent, HorizontalScrollComponent],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {}
