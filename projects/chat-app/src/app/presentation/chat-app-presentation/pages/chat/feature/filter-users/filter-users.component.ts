import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_IMPORTS = [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule];

@Component({
  selector: 'kaa-filter-users',
  standalone: true,
  imports: [MATERIAL_IMPORTS, FormsModule, ReactiveFormsModule],
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterUsersComponent {
  public searchUserControl = new FormControl<string>('');
}
