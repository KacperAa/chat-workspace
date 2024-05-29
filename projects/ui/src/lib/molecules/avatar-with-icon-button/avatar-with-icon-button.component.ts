import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { CircleSizeService } from '../../atoms/circle-size/circle-size.service';

@Component({
  selector: 'ui-avatar-with-icon-button',
  standalone: true,
  imports: [MatIcon],
  providers: [CircleSizeService],
  styleUrls: ['./avatar-with-icon-button.component.scss'],
  templateUrl: './avatar-with-icon-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithIconButtonComponent {
  public onClickIcon = output<void>();
}
