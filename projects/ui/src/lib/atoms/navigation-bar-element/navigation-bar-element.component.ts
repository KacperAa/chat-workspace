import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-navigation-bar-element',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar-element.component.html',
  styleUrl: './navigation-bar-element.component.scss',
})
export class NavigationBarElementComponent {
  public isActivated = input<boolean>(false);
  public href = input.required<string>();
}
