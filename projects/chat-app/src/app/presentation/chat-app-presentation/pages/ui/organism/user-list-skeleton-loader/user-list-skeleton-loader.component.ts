import { Component, input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { SkeletonBarComponent, SkeletonCircleLoaderComponent } from '../../../../../../../../../ui/src/lib/atoms';

@Component({
  selector: 'kaa-user-list-skeleton-loader',
  standalone: true,
  imports: [MatListModule, MatDivider, SkeletonBarComponent, SkeletonCircleLoaderComponent],
  templateUrl: './user-list-skeleton-loader.component.html',
  styleUrl: './user-list-skeleton-loader.component.scss',
})
export class UserListSkeletonLoaderComponent {
  public listLength = input<number>(10);
}
