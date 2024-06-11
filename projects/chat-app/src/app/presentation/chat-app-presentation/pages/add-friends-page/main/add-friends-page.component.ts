import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';
import { UserListComponent } from '../../ui/organism/user-list/user-list.component';
import { AddFriendsPageFacade } from './add-friends-page.facade';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [
    MatLabel,
    MatInput,
    AsyncPipe,
    MatFormField,
    UserListComponent,
    ReactiveFormsModule,
    NavigationToolbarComponent,
  ],
  providers: [AddFriendsPageFacade],
  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFriendsPageComponent implements OnInit {
  protected addFriendsPageFacade = inject(AddFriendsPageFacade);

  public ngOnInit(): void {
    this.addFriendsPageFacade.initChatApp();
  }
}
