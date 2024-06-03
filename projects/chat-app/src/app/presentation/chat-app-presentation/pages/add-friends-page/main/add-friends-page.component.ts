import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';
import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';

import { Observable, debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [NavigationToolbarComponent, MatFormField, MatLabel, MatInput, ReactiveFormsModule, AsyncPipe],

  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
})
export class AddFriendsPageComponent implements OnInit {
  private _chatService = inject(ChatClientService);
  private _chatInitializer = inject(ChatInitializerService);

  public findFiendsControl = new FormControl('', { nonNullable: true });
  public availableUsers$!: Observable<UserResponse<DefaultStreamChatGenerics>[]>;

  public ngOnInit(): void {
    this._chatInitializer.initChat();

    this.availableUsers$ = this.findFiendsControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      switchMap(queryString => {
        return this._chatService.autocompleteUsers(queryString);
      })
    );
  }
}
