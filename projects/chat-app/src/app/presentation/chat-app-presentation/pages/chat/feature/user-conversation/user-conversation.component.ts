import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AvatarComponent } from '@ui/AvatarComponent';
import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { FormFieldComponent } from '@ui/FormFieldComponent';
import { InputComponent } from '@ui/InputComponent';
import { TextCloudComponent } from '@ui/TextCloudComponent';

@Component({
  selector: 'kaa-user-conversation',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    AvatarWithContentComponent,
    MatIcon,
    AvatarComponent,
    FormFieldComponent,
    InputComponent,
    TextCloudComponent,
  ],
  templateUrl: './user-conversation.component.html',
  styleUrl: './user-conversation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserConversationComponent {}
