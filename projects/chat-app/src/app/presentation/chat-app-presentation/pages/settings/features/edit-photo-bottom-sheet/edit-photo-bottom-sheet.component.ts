import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { EditPhotoOptionElement } from './models/edit-photo-options-list.model';

@Component({
  selector: 'kaa-edit-photo-bottom-sheet',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './edit-photo-bottom-sheet.component.html',
  styleUrl: './edit-photo-bottom-sheet.component.scss',
})
export class EditPhotoBottomSheetComponent {
  private _bottomSheetRef = inject(MatBottomSheetRef<EditPhotoBottomSheetComponent>);

  public editOptionsList: EditPhotoOptionElement[] = [
    {
      optionDescription: 'Add via link',
      matIconName: 'http',
      onClickOption: this._onAddViaLink,
    },
    {
      optionDescription: 'Take a photo',
      matIconName: 'photo_camera',
      onClickOption: this._onTakePhoto,
    },
    {
      optionDescription: 'Select from library',
      matIconName: 'photo',
      onClickOption: this._onSelectFromLibrary,
    },
  ];

  public openLink(): void {
    this._bottomSheetRef.dismiss();
  }

  private _onAddViaLink(): void {
    console.log('via');
  }

  private _onTakePhoto(): void {
    console.log('photo');
  }

  private _onSelectFromLibrary(): void {
    console.log('lib');
  }
}
