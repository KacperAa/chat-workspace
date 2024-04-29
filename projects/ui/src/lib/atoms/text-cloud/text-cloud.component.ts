import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-text-cloud',
  standalone: true,
  imports: [],
  templateUrl: './text-cloud.component.html',
  styleUrl: './text-cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCloudComponent {
  public color = input('accent');
}
