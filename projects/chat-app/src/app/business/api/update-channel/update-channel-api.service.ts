import { Injectable, inject } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

@Injectable({
  providedIn: 'root',
})
export class UpdateChannelApiService {
  private _channel = inject(ChannelService);

  public updateUserConverstationImage() {}
}
