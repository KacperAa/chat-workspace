import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'kaa-add-picture-via-link-dialog',
  standalone: true,
  imports: [MatFormField, MatInput, MatIcon, MatButton, MatDialogTitle, MatDialogContent, MatDialogActions, MatLabel],
  templateUrl: './add-picture-via-link-dialog.component.html',
  styleUrl: './add-picture-via-link-dialog.component.scss',
})
export class AddPictureViaLinkDialogComponent {
  private _dialogRef = inject(MatDialogRef);

  onClose(): void {
    this._dialogRef.close();
  }
}
