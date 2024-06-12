import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { ChatLoader } from '../../../../../../../business/chat-loader/chat-loader';
import { FirstNamePipe } from './pipe/first-name.pipe';

@Component({
  selector: 'kaa-users-horizontal-scroller',
  standalone: true,
  imports: [
    FirstNamePipe,
    AvatarComponent,
    HorizontalScrollComponent,
    AvatarWithContentComponent,
    SkeletonCircleLoaderComponent,
  ],
  templateUrl: './users-horizontal-scroller.component.html',
  styleUrl: './users-horizontal-scroller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersHorizontalScrollerComponent {
  public chatLoader: ChatLoader = inject(ChatLoader);

  readonly users = input.required<[] | UserResponse<DefaultStreamChatGenerics>[]>();
}
