import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AddPictureViaLinkDialogComponent } from '../add-picture-via-link-dialog/add-picture-via-link-dialog.component';

@Component({
  selector: 'kaa-edit-photo-bottom-sheet',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './edit-photo-bottom-sheet.component.html',
  styleUrl: './edit-photo-bottom-sheet.component.scss',
})
export class EditPhotoBottomSheetComponent {
  private _bottomSheetRef = inject(MatBottomSheetRef<EditPhotoBottomSheetComponent>);
  private _dialog = inject(MatDialog);

  public onAddViaLink(): void {
    const dialog = this._dialog.open(AddPictureViaLinkDialogComponent, {
      disableClose: true,
      panelClass: 'modal-panel',
    });

    dialog.afterClosed().subscribe(res => console.log(res));

    this._bottomSheetRef.dismiss();
  }

  public onTakePhoto(): void {
    this._bottomSheetRef.dismiss();
  }

  public onSelectLibrary(): void {
    this._bottomSheetRef.dismiss();
  }
}
