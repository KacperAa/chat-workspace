import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-message-info',
  standalone: true,
  imports: [],
  templateUrl: './message-info.component.html',
  styleUrl: './message-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInfoComponent {}
