import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TextCloudColor } from './models/text-cloud-color.model';
import { TextCloudPosition } from './models/text-cloud-position.model';

type TextCloudSendStatus = 'sent' | 'delivered';

@Component({
  selector: 'ui-text-cloud',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text-cloud.component.html',
  styleUrl: './text-cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCloudComponent {
  public color = input<TextCloudColor>('darkgray');
  public position = input<TextCloudPosition>('left');

  public textCloudSendStatus = input<TextCloudSendStatus | undefined>('sent');
}
