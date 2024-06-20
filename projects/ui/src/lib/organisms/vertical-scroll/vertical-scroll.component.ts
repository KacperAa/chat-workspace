import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';

@Component({
  selector: 'ui-vertical-scroll',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './vertical-scroll.component.html',
  styleUrl: './vertical-scroll.component.scss',
})
export class VerticalScrollComponent {}
