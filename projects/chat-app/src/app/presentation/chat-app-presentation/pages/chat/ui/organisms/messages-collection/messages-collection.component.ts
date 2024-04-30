import { Component } from '@angular/core';

import { TextCloudComponent } from '@ui/TextCloudComponent';
import { VerticalScrollComponent } from '@ui/VerticalScrollComponent';

@Component({
  selector: 'kaa-messages-collection',
  standalone: true,
  imports: [VerticalScrollComponent, TextCloudComponent],
  templateUrl: './messages-collection.component.html',
  styleUrl: './messages-collection.component.scss',
})
export class MessagesCollectionComponent {}
