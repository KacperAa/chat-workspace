import { Injectable, inject, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Channel } from 'stream-chat';
import { ChannelService, DefaultStreamChatGenerics } from 'stream-chat-angular';

import { Observable, filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  private _auth = inject(Auth);
  private _channel = inject(ChannelService);

  private _isTyping = signal<boolean>(false);
  public isTyping = this._isTyping.asReadonly();

  public watchChannelTyping(): Observable<void> {
    return this._channel.activeChannel$.pipe(
      filter(channel => !!channel),
      map(channel => {
        if (channel) {
          channel.watch();
          this._trackTypingState(channel);
        }
      })
    );
  }

  public channelTyping(): void {
    from(this._channel.activeChannel!.keystroke());
  }

  public channelStopTyping(): void {
    from(this._channel.activeChannel!.stopTyping());
  }

  private _trackTypingState(channel: Channel<DefaultStreamChatGenerics>): void {
    channel.on('typing.start', event => {
      if (event.user!.id !== this._auth.currentUser?.uid) {
        this._isTyping.set(true);
      }
    });

    channel.on('typing.stop', event => {
      if (event.user!.id !== this._auth.currentUser?.uid) {
        this._isTyping.set(false);
      }
    });
  }
}
