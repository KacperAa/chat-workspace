import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TextCloudColor } from './models/text-cloud-color.model';

@Component({
  selector: 'ui-text-cloud',
  standalone: true,
  imports: [],
  templateUrl: './text-cloud.component.html',
  styleUrl: './text-cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCloudComponent {
  public color = input<TextCloudColor>('darkgray');
}
