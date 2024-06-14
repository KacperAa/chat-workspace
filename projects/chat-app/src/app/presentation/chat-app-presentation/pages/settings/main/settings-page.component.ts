import { Component, Signal, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';

import { AvatarComponent, SkeletonCircleLoaderComponent } from '../../../../../../../../ui/src/lib/atoms';
import { AvatarWithIconButtonComponent } from '../../../../../../../../ui/src/lib/molecules';
import { AvatarWithContentComponent } from '../../../../../../../../ui/src/lib/molecules';
import { AuthStore } from '../../../../../business/api/user-repository/auth/auth.store';
import { ChatLoader } from '../../../../../business/chat-loader/chat-loader';
import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';
import { EditPhotoBottomSheetComponent } from '../features/edit-photo-bottom-sheet/edit-photo-bottom-sheet.component';

@Component({
  selector: 'kaa-settings-page',
  standalone: true,
  imports: [
    MatIcon,
    AvatarComponent,
    MatBottomSheetModule,
    AvatarWithContentComponent,
    NavigationToolbarComponent,
    SkeletonCircleLoaderComponent,
    AvatarWithIconButtonComponent,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  private _authStore = inject(AuthStore);
  private _chatLoader = inject(ChatLoader);
  private _bottomSheet = inject(MatBottomSheet);

  public user: Signal<User | null> = this._authStore.loggedUser;

  public isLoading: Signal<boolean> = this._chatLoader.isChatLoaded;

  public openEditPhotoBottomSheet(): void {
    this._bottomSheet.open(EditPhotoBottomSheetComponent);
  }
}
