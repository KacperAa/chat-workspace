import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  contentChild,
  input,
  viewChild,
} from '@angular/core';

import { CloudColorPipe } from '../../../../../chat-app/src/app/presentation/chat-app-presentation/pages/chat/feature/conversation-window/pipes/cloud-color.pipe';
import { CloudPositionPipe } from '../../../../../chat-app/src/app/presentation/chat-app-presentation/pages/chat/feature/conversation-window/pipes/cloud-position.pipe';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { TextCloudColor } from '../../atoms/text-cloud/models/text-cloud-color.model';
import { TextCloudPosition } from '../../atoms/text-cloud/models/text-cloud-position.model';
import { TextCloudComponent } from '../../atoms/text-cloud/text-cloud.component';
import { getMissingImageError, getMissingSpanError } from './errors/avatar-with-text-cloud-errors';

@Component({
  selector: 'ui-avatar-with-text-cloud',
  standalone: true,
  templateUrl: './avatar-with-text-cloud.component.html',
  styleUrl: './avatar-with-text-cloud.component.scss',
  imports: [TextCloudComponent, CloudColorPipe, CloudPositionPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithTextCloudComponent implements AfterContentChecked {
  private _avatarComponent = contentChild<AvatarComponent | undefined>(AvatarComponent);
  private _spanElementContainer = viewChild.required<ElementRef<HTMLElement>>('spanElementContainer');

  public color = input<TextCloudColor>('darkgray');
  public position = input<TextCloudPosition>('right');

  public ngAfterContentChecked(): void {
    this._throwMissingSpanError();
    this._throwMissingImageError();
  }

  private _throwMissingSpanError(): void {
    if (this._spanElementContainer().nativeElement.childNodes.length === 0) {
      throw getMissingSpanError();
    }
  }

  private _throwMissingImageError(): void {
    if (!this._avatarComponent()) {
      throw getMissingImageError();
    }
  }
}
