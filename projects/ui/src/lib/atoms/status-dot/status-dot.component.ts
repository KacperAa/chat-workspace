import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-status-dot',
  standalone: true,
  imports: [],
  templateUrl: './status-dot.component.html',
  styleUrl: './status-dot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusDotComponent {}
