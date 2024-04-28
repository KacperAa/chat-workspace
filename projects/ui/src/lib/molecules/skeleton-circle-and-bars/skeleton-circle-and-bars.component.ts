import { Component } from '@angular/core';

import { SkeletonBarComponent } from '../../atoms/skeleton-loader/skeleton-bar/skeleton-bar.component';
import { SkeletonCircleLoaderComponent } from '../../atoms/skeleton-loader/skeleton-circle/skeleton-circle-loader.component';

@Component({
  selector: 'ui-skeleton-circle-and-bars',
  standalone: true,
  imports: [SkeletonCircleLoaderComponent, SkeletonBarComponent],
  templateUrl: './skeleton-circle-and-bars.component.html',
  styleUrl: './skeleton-circle-and-bars.component.scss',
})
export class SkeletonCircleAndBarsComponent {}
