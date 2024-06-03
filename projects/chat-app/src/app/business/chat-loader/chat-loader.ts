import { Injectable, Signal } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatLoader {
  private _isChatLoaded$ = new BehaviorSubject<boolean>(false);

  readonly isChatLoaded: Signal<boolean> = toSignal(this._isChatLoaded$, { requireSync: true });

  public patchIsChatLoadedState(isLoaded: boolean): void {
    this._isChatLoaded$.next(isLoaded);
  }
}
