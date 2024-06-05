import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { UserMergedResponse } from '../../../../../business/api/all-app-users/models/user-merged-response.model';
import { UserApiService } from '../../../../../business/api/all-app-users/user-api.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';
import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';
import { UserListComponent } from '../../ui/organism/user-list/user-list.component';

import { Observable, debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [
    NavigationToolbarComponent,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    AsyncPipe,
    UserListComponent,
  ],
  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFriendsPageComponent implements OnInit {
  private _chatInitializer = inject(ChatInitializerService);

  private _userApi = inject(UserApiService);

  public findFiendsControl = new FormControl('', { nonNullable: true });
  public availableUsers$!: Observable<UserMergedResponse[]>;

  public ngOnInit(): void {
    this._chatInitializer.initChat();

    this._handleGetUsersInputStream();
  }

  public addFriend(user: UserMergedResponse): void {
    console.log(user);
  }

  private _handleGetUsersInputStream(): void {
    this.availableUsers$ = this.findFiendsControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      switchMap(queryString => {
        return this._userApi.getUsersByFilter(queryString);
      })
    );
  }
}
