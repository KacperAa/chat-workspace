import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ChatClientService } from 'stream-chat-angular';

import { NavigationToolbarComponent } from '../../ui/molecules/navigation-toolbar/navigation-toolbar.component';

@Component({
  selector: 'kaa-add-friends-page',
  standalone: true,
  imports: [NavigationToolbarComponent, MatFormField, MatLabel, MatInput, ReactiveFormsModule],

  templateUrl: './add-friends-page.component.html',
  styleUrl: './add-friends-page.component.scss',
})
export class AddFriendsPageComponent implements OnInit {
  private _chatService = inject(ChatClientService);

  public findFiendsControl = new FormControl('');

  public ngOnInit(): void {
    this.findFiendsControl.valueChanges.subscribe(value => console.log(value));
  }
}
