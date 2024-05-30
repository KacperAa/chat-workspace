import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'kaa-edit-photo-bottom-sheet',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './edit-photo-bottom-sheet.component.html',
  styleUrl: './edit-photo-bottom-sheet.component.scss',
})
export class EditPhotoBottomSheetComponent {
  private _bottomSheetRef = inject(MatBottomSheetRef<EditPhotoBottomSheetComponent>);

  public onAddViaLink(): void {
    this._bottomSheetRef.dismiss();
  }

  public onTakePhoto(): void {
    this._bottomSheetRef.dismiss();
  }

  public onSelectLibrary(): void {
    this._bottomSheetRef.dismiss();
  }
}
