import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [AvatarWithContentComponent, HorizontalScrollComponent, AvatarComponent],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {}
