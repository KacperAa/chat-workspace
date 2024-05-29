import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CircleSizeService } from '../../atoms/circle-size/circle-size.service';

@Component({
  selector: 'ui-avatar-with-icon-button',
  standalone: true,
  providers: [CircleSizeService],
  styleUrls: ['./avatar-with-icon-button.component.scss'],
  templateUrl: './avatar-with-icon-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarWithIconButtonComponent {
  public borderColorVar = input('');
  public backgroundColorVar = input('');

  public onClickBtn = output<void>();
}
