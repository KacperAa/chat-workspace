import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'kaa-add-picture-via-link-dialog',
  standalone: true,
  imports: [
    MatIcon,
    MatLabel,
    MatInput,
    MatButton,
    MatFormField,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    ReactiveFormsModule,
  ],
  templateUrl: './add-picture-via-link-dialog.component.html',
  styleUrl: './add-picture-via-link-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPictureViaLinkDialogComponent {
  private _dialogRef = inject(MatDialogRef);

  public editPictureControl = new FormControl<string | null>('');

  onClose(): void {
    this._dialogRef.close();
  }

  onEdit(): void {
    this._dialogRef.close(this.editPictureControl.value);
  }
}
