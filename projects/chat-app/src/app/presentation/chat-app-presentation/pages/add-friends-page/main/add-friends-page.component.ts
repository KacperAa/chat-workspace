import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ChatClientService } from 'stream-chat-angular';

import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [NavigationToolbarComponent, MatFormField, MatLabel, MatInput],

  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
})
export class AddFriendsPageComponent {
  // private _usersApiService = inject(UsersApiService);
  private _chatService = inject(ChatClientService);

  ngOnInit(): void {
    // console.log(this._usersApiService.getAllUsers());
  }
}
