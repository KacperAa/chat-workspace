import { Component, Input } from '@angular/core';

@Component({
  selector: 'kaa-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Input('dd') public testd!: string;
  title = 'chat-app';
}
