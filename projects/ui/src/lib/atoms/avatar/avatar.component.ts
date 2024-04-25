import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

import { AvatarSize } from './models/avatar-size.model';

@Component({
  selector: 'img[ui-avatar]',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  public readonly size = input<AvatarSize>('normal');

  public elementRef = inject(ElementRef);

  constructor() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const classList = element.classList;

    classList.add('user-circle', 'mat-elevation-z10');
  }

  public ngOnInit(): void {
    this._setAvatarSize();
  }

  private _setAvatarSize(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const classList = element.classList;
    switch (this.size()) {
      case 'small': {
        classList.add('user-circle-sm');
        break;
      }
      case 'normal': {
        classList.add('user-circle-md');
        break;
      }
      case 'large': {
        classList.add('user-circle-lg');
        break;
      }
      default: {
        let n: never;
      }
    }
  }
}
