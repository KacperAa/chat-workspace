import { Component, inject, input } from '@angular/core';

import { CircleSizeService } from '../../circle-size/circle-size.service';
import { CirclePresentationSize } from '../../circle-size/models/circle-presentation-size.model';

@Component({
  selector: 'ui-skeleton-loader',
  standalone: true,
  imports: [],
  providers: [CircleSizeService],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['../styles/_skeleton-base.scss', '../../../styles/_circle-presentation.scss'],
})
export class SkeletonLoaderComponent {
  private _circleSize = inject(CircleSizeService);
  public readonly size = input<CirclePresentationSize>('normal');

  public setCircleSizeClass(): string {
    return this._circleSize.setCircleSizeClass(this.size());
  }
}
