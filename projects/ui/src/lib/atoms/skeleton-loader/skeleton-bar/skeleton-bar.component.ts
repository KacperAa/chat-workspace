import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-skeleton-bar',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-bar.component.html',
  styleUrls: ['./skeleton-bar.component.scss', '../styles/_skeleton-base.scss'],
})
export class SkeletonBarComponent {
  public readonly width = input('20rem', {
    transform: (value: string | number) => {
      const isNumber = typeof value === 'number';
      if (isNumber) {
        return `${value}rem`;
      } else if (!isNumber && !value.endsWith('rem')) {
        return `${value}rem`;
      }
      return value;
    },
  });
  public readonly height = input('1.5rem');
}
