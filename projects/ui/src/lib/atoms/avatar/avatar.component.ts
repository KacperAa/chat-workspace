import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'img[ui-avatar]',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  public elementRef = inject(ElementRef);

  constructor() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const classList = element.classList;

    classList.add('user-circle', 'mat-elevation-z10');
  }
}
