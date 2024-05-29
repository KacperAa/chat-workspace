import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { FormFieldComponent } from '../../../../../../../../../../ui/src/lib/molecules/form-field/form-field.component';

@Component({
  selector: 'kaa-message-input',
  standalone: true,
  templateUrl: './message-input.component.html',
  imports: [FormFieldComponent, MatIcon, InputComponent, MatIconButton],
  host: {
    '[@inputWidth]': "isInputFocusMode ? 'expanded' : 'collapsed'",
  },
  animations: [
    trigger('inputWidth', [
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
      transition('collapsed <=> expanded', [animate('0.2s ease-in-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInputComponent {
  public onWrite = output<void>();

  public isInputFocusMode: boolean = false;
  public inputFocusMode = output<boolean>();

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    this._handleOutsideBottomToolbarClick(event);
  }

  public onInputFocus(): void {
    this.isInputFocusMode = true;
    this.inputFocusMode.emit(this.isInputFocusMode);
  }

  /**
   * Handles clicks outside the bottom toolbar to switch input mode.
   * Ensures that the wide input doesn't close every time the send message button is clicked.
   */
  private _handleOutsideBottomToolbarClick(event: MouseEvent): void {
    const isClickInsideBottomToolbar =
      (event.target as HTMLElement).closest('.user-conversation-presentation__toolbar-bottom') !== null;

    if (!isClickInsideBottomToolbar) {
      this.isInputFocusMode = false;
      this.inputFocusMode.emit(this.isInputFocusMode);
    }
  }
}
