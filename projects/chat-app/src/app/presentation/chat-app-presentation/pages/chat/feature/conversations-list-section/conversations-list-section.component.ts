import { Component, computed, inject } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { AvatarComponent } from '@ui/AvatarWithContentComponent';
import { SkeletonCircleAndBarsComponent } from '@ui/SkeletonCircleAndBarsComponent';

import { UsersStore } from '../../users-data/users.store';

@Component({
  selector: 'kaa-conversations-list-section',
  standalone: true,
  imports: [AvatarWithContentComponent, AvatarComponent, SkeletonCircleAndBarsComponent],
  templateUrl: './conversations-list-section.component.html',
  styleUrl: './conversations-list-section.component.scss',
})
export class ConversationsListSectionComponent {
  readonly usersStore = inject(UsersStore);
  readonly isFetching = computed(() => {
    return this.usersStore.users().length === 0;
  });
}
