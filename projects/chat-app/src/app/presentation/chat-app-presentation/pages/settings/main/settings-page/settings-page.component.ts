import { Component, Signal, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { SkeletonCircleLoaderComponent } from '../../../../../../../../../ui/src/lib/atoms';
import { AvatarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import {
  AvatarWithContentComponent,
  AvatarWithIconButtonComponent,
} from '../../../../../../../../../ui/src/lib/molecules';
import { AuthStore } from '../../../../../../business/api/auth/auth.store';
import { ChatLoader } from '../../../../chat-loader/chat-loader';
import { EditPhotoBottomSheetComponent } from '../../features/edit-photo-bottom-sheet/edit-photo-bottom-sheet.component';

@Component({
  selector: 'kaa-settings-page',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton,
    AvatarComponent,
    MatBottomSheetModule,
    AvatarWithContentComponent,
    SkeletonCircleLoaderComponent,
    AvatarWithIconButtonComponent,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  private _router = inject(Router);
  private _authStore = inject(AuthStore);
  private _chatLoader = inject(ChatLoader);
  private _bottomSheet = inject(MatBottomSheet);

  public user: Signal<User | null> = this._authStore.loggedUser;

  public isLoading: Signal<boolean> = this._chatLoader.isChatLoaded;

  public navigateToChat(): void {
    this._router.navigate(['chat/conversations']);
  }

  public openEditPhotoBottomSheet(): void {
    this._bottomSheet.open(EditPhotoBottomSheetComponent);
  }
}
