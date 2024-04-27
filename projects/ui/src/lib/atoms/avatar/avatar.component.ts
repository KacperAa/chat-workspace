import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

import { CircleSizeService } from '../circle-size/circle-size.service';
import { CirclePresentationSize } from '../circle-size/models/circle-presentation-size.model';

@Component({
  selector: 'img[ui-avatar]',
  standalone: true,
  imports: [],
  providers: [CircleSizeService],
  host: {
    '[class]': 'setAvatarSize()',
  },
  templateUrl: './avatar.component.html',
  styleUrls: ['../../styles/_circle-presentation.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  private _circleSize = inject(CircleSizeService);
  public readonly size = input<CirclePresentationSize>('normal');

  public elementRef = inject(ElementRef);

  constructor() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const classList = element.classList;

    classList.add('circle', 'mat-elevation-z10');
  }

  public ngOnInit(): void {}

  public setAvatarSize(): string {
    return this._circleSize.setCircleSizeClass(this.size());
  }
}
