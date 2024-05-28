import { ChangeDetectionStrategy, Component, HostListener, input, output, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { FormFieldComponent } from '@ui/FormFieldComponent';
import { InputComponent } from '@ui/InputComponent';
import { SkeletonBarComponent } from '@ui/SkeletonBarComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { ConversationData } from '../../../../../../../business/api/channels/channel-mapper/models/conversation-data.model';
import { ActionButton } from './models/action-button.model';

@Component({
  selector: 'kaa-conversation-core',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    AvatarWithContentComponent,
    MatIcon,
    AvatarComponent,
    FormFieldComponent,
    InputComponent,
    SkeletonCircleLoaderComponent,
    SkeletonBarComponent,
  ],
  templateUrl: './conversation-core.component.html',
  styleUrl: './conversation-core.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationCoreComponent {
  public conversationPresentationData = input.required<ConversationData | null>();
  public onWrite = output<void>();

  public isInputFocusMode: boolean = false;

  public topActionButtons: ActionButton[] = [{ icon: 'phone' }, { icon: 'videocam' }, { icon: 'info' }];
  public bottomActionButtons: ActionButton[] = [{ icon: 'photo' }, { icon: 'microphone' }, { icon: 'photo_camera' }];

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    this._handleOutsideBottomToolbarClick(event);
  }

  public onInputFocus(): void {
    this.isInputFocusMode = true;
  }

  /**
   * Handles clicks outside the bottom toolbar to switch input mode.
   * Ensures that the wide input doesn't close every time the send message button is clicked.
   */
  private _handleOutsideBottomToolbarClick(event: MouseEvent): void {
    const isClickInsideBottomToolbar =
      (event.target as HTMLElement).closest('.user-conversation-presentation__toolbar-bottom') !== null;

    if (!isClickInsideBottomToolbar) {
      this.isInputFocusMode = false;
    }
  }
}
