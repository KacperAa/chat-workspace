import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { AvatarComponent } from '../../../../../../../../../ui/src/lib/atoms';
import {
  AvatarWithContentComponent,
  AvatarWithIconButtonComponent,
} from '../../../../../../../../../ui/src/lib/molecules';

@Component({
  selector: 'kaa-settings',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton,
    AvatarComponent,
    AvatarWithContentComponent,
    AvatarWithIconButtonComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private _router: Router = inject(Router);

  public navigateToChat(): void {
    this._router.navigate(['chat/conversations']);
  }

  public openEditPicture(): void {}
}
