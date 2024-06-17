import { Injectable, inject } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

@Injectable()
export class SendMessageApiService {
  private _channelService = inject(ChannelService);

  public async sendMessage(message: string): Promise<void> {
    await this._channelService.activeChannel?.sendMessage({ text: message });
  }
}
