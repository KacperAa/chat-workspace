import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { SkeletonBarComponent } from '@ui/SkeletonBarComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { ConversationData } from '../../../../../../../business/api/channel-conversation/channel-conversation-mapper/models/conversation-data.model';
import { MessageInputComponent } from '../../molecules/message-input/message-input.component';
import { ActionButton } from './models/action-button.model';

@Component({
  selector: 'kaa-conversation-core',
  standalone: true,
  imports: [
    MatIcon,
    AvatarComponent,
    MatButtonModule,
    MatToolbarModule,
    SkeletonBarComponent,
    MessageInputComponent,
    AvatarWithContentComponent,
    SkeletonCircleLoaderComponent,
  ],
  templateUrl: './conversation-core.component.html',
  styleUrl: './conversation-core.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationCoreComponent {
  private _router = inject(Router);

  public conversationPresentationData = input.required<ConversationData | null>();

  public onWrite = output<void>();
  public sendMessage = output<string>();

  public messageFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(1000),
  ]);

  public isInputFocusMode: boolean = false;

  public topActionButtons: ActionButton[] = [{ icon: 'phone' }, { icon: 'videocam' }, { icon: 'info' }];
  public bottomActionButtons: ActionButton[] = [{ icon: 'photo' }, { icon: 'microphone' }, { icon: 'photo_camera' }];

  public onSendMessage(): void {
    const isFormValid: boolean = this.messageFormControl.valid;

    if (isFormValid) {
      const message: string = this.messageFormControl.value!;
      this.sendMessage.emit(message);
      this.messageFormControl.reset();
    }
  }

  public navigateToChat(): void {
    this._router.navigate(['chat/conversations']);
  }
}
