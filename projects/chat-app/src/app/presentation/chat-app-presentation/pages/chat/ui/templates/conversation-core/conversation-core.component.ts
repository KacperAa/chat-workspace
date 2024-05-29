import { ChangeDetectionStrategy, Component, OnInit, input, output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { SkeletonBarComponent } from '@ui/SkeletonBarComponent';
import { SkeletonCircleLoaderComponent } from '@ui/SkeletonCircleLoaderComponent';

import { ConversationData } from '../../../../../../../business/api/channels/channel-mapper/models/conversation-data.model';
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
export class ConversationCoreComponent implements OnInit {
  public conversationPresentationData = input.required<ConversationData | null>();
  public onWrite = output<void>();

  public messageFormControl = new FormControl<string | null>('', [Validators.maxLength(1000)]);

  public isInputFocusMode: boolean = false;
  public isSendButtonVisible: boolean = false;

  public topActionButtons: ActionButton[] = [{ icon: 'phone' }, { icon: 'videocam' }, { icon: 'info' }];
  public bottomActionButtons: ActionButton[] = [{ icon: 'photo' }, { icon: 'microphone' }, { icon: 'photo_camera' }];

  public ngOnInit(): void {
    this._trackIsSendButtonVisible();
  }

  public onSendMessage(): void {
    if (this._isMessageCanSend()) {
      console.log(this.messageFormControl.value);
      this.messageFormControl.reset();
    }
  }

  public _trackIsSendButtonVisible(): void {
    this.messageFormControl.valueChanges.subscribe(value => {
      this.isSendButtonVisible = this.isInputFocusMode && value?.length! > 0;
    });
  }

  private _isMessageCanSend(): boolean {
    const isFormValid: boolean = this.messageFormControl.valid;
    const message: string | null = this.messageFormControl.value;

    return message !== null && isFormValid;
  }
}
