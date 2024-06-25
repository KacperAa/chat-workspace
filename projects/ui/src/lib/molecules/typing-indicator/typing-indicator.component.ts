import { Component } from '@angular/core';

import { TextCloudComponent } from '../text-cloud/text-cloud.component';

@Component({
  selector: 'ui-typing-indicator',
  standalone: true,
  imports: [TextCloudComponent],
  templateUrl: './typing-indicator.component.html',
  styleUrl: './typing-indicator.component.scss',
})
export class TypingIndicatorComponent {}
