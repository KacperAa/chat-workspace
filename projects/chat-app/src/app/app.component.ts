import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';

import { CoreComponent } from './presentation/chat-app-presentation/core/core.component';

const STREAM_CHAT_IMPORTS = [StreamAutocompleteTextareaModule, StreamChatModule];

@Component({
  selector: 'kaa-root',
  standalone: true,
  imports: [RouterOutlet, CoreComponent, TranslateModule, STREAM_CHAT_IMPORTS],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
