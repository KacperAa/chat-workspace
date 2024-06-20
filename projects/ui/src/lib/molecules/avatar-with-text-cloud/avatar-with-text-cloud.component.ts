import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CloudColorPipe } from '../../../../../chat-app/src/app/presentation/chat-app-presentation/pages/chat/feature/conversation-window/pipes/cloud-color.pipe';
import { CloudPositionPipe } from '../../../../../chat-app/src/app/presentation/chat-app-presentation/pages/chat/feature/conversation-window/pipes/cloud-position.pipe';
import { TextCloudColor } from '../../atoms/text-cloud/models/text-cloud-color.model';
import { TextCloudPosition } from '../../atoms/text-cloud/models/text-cloud-position.model';
import { TextCloudComponent } from '../../atoms/text-cloud/text-cloud.component';

@Component({
  selector: 'ui-avatar-with-text-cloud',
  standalone: true,
  templateUrl: './avatar-with-text-cloud.component.html',
  styleUrl: './avatar-with-text-cloud.component.scss',
  imports: [TextCloudComponent, CloudColorPipe, CloudPositionPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithTextCloudComponent {
  public color = input<TextCloudColor>('darkgray');
  public position = input<TextCloudPosition>('right');
}
