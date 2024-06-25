import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TextCloudSendStatus } from '../text-cloud/models/text-cloud-send.status.model';

@Component({
  selector: 'ui-message-info',
  standalone: true,
  imports: [],
  templateUrl: './message-info.component.html',
  styleUrl: './message-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInfoComponent {
  public textCloudSendStatus = input<TextCloudSendStatus | undefined>();
}
