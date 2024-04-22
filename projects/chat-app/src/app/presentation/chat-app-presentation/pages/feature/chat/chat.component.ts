import { CoreComponent } from '../../../core/core.component';
import { Component } from '@angular/core';

@Component({
  selector: 'kaa-chat',
  standalone: true,
  imports: [CoreComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
