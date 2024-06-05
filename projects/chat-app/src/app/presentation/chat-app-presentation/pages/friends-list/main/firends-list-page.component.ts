import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { MappedUserFields } from '../../../../../business/api/auth/models/mapped-user-fields.model';
import { FriendsService } from '../../../../../business/api/friends/friends.service';
import { ChatInitializerService } from '../../../../../business/chat-initializer/chat-initializer.service';
import { FriendsListComponent } from '../ui/organisms/friends-list/friends-list.component';

import { Observable } from 'rxjs';

@Component({
  selector: 'kaa-firends-list-page',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon, AsyncPipe, FriendsListComponent],
  templateUrl: './firends-list-page.component.html',
  styleUrl: './firends-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirendsListPageComponent implements OnInit {
  private _auth = inject(Auth);
  private _router = inject(Router);
  private _friends = inject(FriendsService);
  private _chatInitializer = inject(ChatInitializerService);

  public friendsList$!: Observable<MappedUserFields[]>;

  public ngOnInit(): void {
    this._chatInitializer.initChat();

    this._getFriends();
  }

  public navigateToUserConversations(): void {
    this._router.navigate(['chat/conversations']);
  }

  public navigateToAddFriends(): void {}

  private _getFriends(): void {
    const uid = this._auth.currentUser?.uid!;

    this.friendsList$ = this._friends.getFriends(uid);
  }
}
