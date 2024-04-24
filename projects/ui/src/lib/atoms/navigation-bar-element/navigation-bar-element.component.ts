import { Component, ElementRef, OnInit, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'a[ui-nav-bar-element]',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar-element.component.html',
  styleUrl: './navigation-bar-element.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavigationBarElementComponent implements OnInit {
  public elementRef = inject(ElementRef);

  public isActivated = input<boolean>(false);

  constructor() {
    const element = this.elementRef.nativeElement;
    const classList = (element as HTMLElement).classList;

    classList.add('nav-bar-element');
  }
  public ngOnInit(): void {
    if (this.isActivated()) {
      const element = this.elementRef.nativeElement;
      const classList = (element as HTMLElement).classList;

      classList.add('active');
    }
  }
}
