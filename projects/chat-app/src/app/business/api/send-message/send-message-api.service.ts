import { Injectable, inject } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

@Injectable({
  providedIn: 'root',
})
export class SendMessageApiService {
  private _channelService = inject(ChannelService);

  private _activeChannel = this._channelService.activeChannel;

  public async sendMessage(message: string): Promise<void> {
    await this._activeChannel?.sendMessage({ text: message });
  }
}
