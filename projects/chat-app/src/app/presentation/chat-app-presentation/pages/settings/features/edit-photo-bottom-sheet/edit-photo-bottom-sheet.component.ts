import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { UpdateUserProfileApiService } from '../../../../../../business/api/update-user-profile/update-user-profile-api.service';
import { ChatLoader } from '../../../../../../business/chat-loader/chat-loader';
import { AddPictureViaLinkDialogComponent } from '../../ui/molecules/add-picture-via-link-dialog/add-picture-via-link-dialog.component';

@Component({
  selector: 'kaa-edit-photo-bottom-sheet',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './edit-photo-bottom-sheet.component.html',
  styleUrl: './edit-photo-bottom-sheet.component.scss',
})
export class EditPhotoBottomSheetComponent {
  private _dialog = inject(MatDialog);
  private _chatLoader = inject(ChatLoader);
  private _updateUserProfile = inject(UpdateUserProfileApiService);
  private _bottomSheetRef = inject(MatBottomSheetRef<EditPhotoBottomSheetComponent>);

  public onAddViaLink(): void {
    const dialog = this._dialog.open(AddPictureViaLinkDialogComponent, {
      disableClose: true,
      panelClass: 'modal-panel',
    });

    dialog.afterClosed().subscribe(photoUrl => {
      this._handleUpdatePhotoStream(photoUrl);
    });
    this._bottomSheetRef.dismiss();
  }

  public onTakePhoto(): void {
    this._bottomSheetRef.dismiss();
  }

  public onSelectLibrary(): void {
    this._bottomSheetRef.dismiss();
  }

  private _handleUpdatePhotoStream(photoUrl: string): void {
    this._chatLoader.patchIsChatLoadedState(true);

    this._updateUserProfile.updateUserPhoto(photoUrl).subscribe(() => {
      this._chatLoader.patchIsChatLoadedState(false);
    });
  }
}
