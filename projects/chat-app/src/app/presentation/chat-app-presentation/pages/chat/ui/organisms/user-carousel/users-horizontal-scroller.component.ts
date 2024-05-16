import { ChangeDetectionStrategy, Component, Signal, computed, inject, input } from '@angular/core';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { UserMockup } from '../../../../../../../business/api/user/models/user.model';
import { ChatLoader } from '../../../../../chat-loader/chat-loader';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [AvatarWithContentComponent, HorizontalScrollComponent, AvatarComponent, SkeletonCircleLoaderComponent],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);

  readonly users = input.required<UserMockup[]>();
}
