import { Component, input } from '@angular/core';

import { CirclePresentationSize } from '../../atoms/circle-size/models/circle-presentation-size.model';
import { SkeletonBarComponent } from '../../atoms/skeleton-loader/skeleton-bar/skeleton-bar.component';
import { SkeletonCircleLoaderComponent } from '../../atoms/skeleton-loader/skeleton-circle/skeleton-circle-loader.component';

@Component({
  selector: 'ui-skeleton-circle-and-bars',
  standalone: true,
  imports: [SkeletonCircleLoaderComponent, SkeletonBarComponent],
  templateUrl: './skeleton-circle-and-bars.component.html',
  styleUrl: './skeleton-circle-and-bars.component.scss',
})
export class SkeletonCircleAndBarsComponent {
  public cirecleSize = input<CirclePresentationSize>('normal');
}
