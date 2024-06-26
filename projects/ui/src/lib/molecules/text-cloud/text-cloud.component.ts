import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MessageInfoComponent } from '../../atoms/message-info/message-info.component';
import { TextCloudColor } from './models/text-cloud-color.model';
import { TextCloudPosition } from './models/text-cloud-position.model';
import { TextCloudSendStatus } from './models/text-cloud-send.status.model';

@Component({
  selector: 'ui-text-cloud',
  standalone: true,
  imports: [NgClass, MessageInfoComponent],
  templateUrl: './text-cloud.component.html',
  styleUrl: './text-cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCloudComponent {
  public color = input<TextCloudColor>('darkgray');
  public position = input<TextCloudPosition>('left');

  public textCloudSendStatus = input<TextCloudSendStatus | undefined>();
}
