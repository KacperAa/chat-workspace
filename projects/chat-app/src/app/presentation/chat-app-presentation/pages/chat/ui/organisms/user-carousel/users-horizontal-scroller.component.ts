import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { MappedUserFields } from '../../../../../../../business/api/auth/models/mapped-user-fields.model';
import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';
import { FirstNamePipe } from './pipe/first-name.pipe';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [
    AvatarWithContentComponent,
    HorizontalScrollComponent,
    AvatarComponent,
    SkeletonCircleLoaderComponent,
    FirstNamePipe,
  ],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);

  readonly users = input.required<MappedUserFields[]>();
}
