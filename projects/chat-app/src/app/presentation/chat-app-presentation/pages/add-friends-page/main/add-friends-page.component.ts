import { Component } from '@angular/core';

import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [NavigationToolbarComponent],
  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
})
export class AddFriendsPageComponent {}
