import { Component } from '@angular/core';

import { AvatarWithContentComponent } from '@ui/AvatarWithContentComponent';
import { HorizontalScrollComponent } from '@ui/HorizontalScrollComponent';

@Component({
  selector: 'kaa-user-carousel',
  standalone: true,
  imports: [AvatarWithContentComponent, HorizontalScrollComponent],
  templateUrl: './user-carousel.component.html',
  styleUrl: './user-carousel.component.scss',
})
export class UserCarouselComponent {}
