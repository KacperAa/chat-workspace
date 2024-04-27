import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-skeleton-bar',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-bar.component.html',
  styleUrls: ['./skeleton-bar.component.scss', '../styles/_skeleton-base.scss'],
})
export class SkeletonBarComponent {
  public readonly width = input('20rem');
  public readonly height = input('1.5rem');
}
