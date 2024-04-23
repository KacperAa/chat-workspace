import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-avatar-with-content',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './avatar-with-content.component.html',
  styleUrl: './avatar-with-content.component.scss',
})
export class AvatarWithContentComponent {}
