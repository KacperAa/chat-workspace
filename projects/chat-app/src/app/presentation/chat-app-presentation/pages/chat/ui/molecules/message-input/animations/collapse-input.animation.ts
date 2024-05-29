import { animate, state, style, transition, trigger } from '@angular/animations';

export function inputCollapseAnimation() {
  return trigger('inputWidth', [
    state(
      'collapsed',
      style({
        width: '50%',
      })
    ),
    state(
      'expanded',
      style({
        width: '100%',
      })
    ),
    transition('collapsed <=> expanded', [animate('0.3s ease-in-out')]),
  ]);
}
