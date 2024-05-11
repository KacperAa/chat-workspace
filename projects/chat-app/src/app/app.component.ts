import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreComponent } from './presentation/chat-app-presentation/core/core.component';

@Component({
  selector: 'kaa-root',
  standalone: true,
  imports: [RouterOutlet, CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
