import { ChangeDetectionStrategy, Component, Signal, computed, input } from '@angular/core';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { UserMockup } from '../../../../../../../business/api/user/models/user.model';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [AvatarWithContentComponent, HorizontalScrollComponent, AvatarComponent, SkeletonCircleLoaderComponent],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {
  readonly users = input.required<UserMockup[]>();

  readonly isFetching: Signal<boolean> = computed(() => {
    return this.users().length < 1;
  });
}
