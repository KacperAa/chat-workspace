import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-horizontal-scroll',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalScrollComponent {}
