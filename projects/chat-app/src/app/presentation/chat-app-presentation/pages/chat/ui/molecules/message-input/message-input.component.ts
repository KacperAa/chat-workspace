import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputComponent } from '../../../../../../../../../../ui/src/lib/atoms';
import { FormFieldComponent } from '../../../../../../../../../../ui/src/lib/molecules/form-field/form-field.component';
import { inputCollapseAnimation } from './animations/collapse-input.animation';

@Component({
  selector: 'kaa-message-input',
  standalone: true,
  templateUrl: './message-input.component.html',
  imports: [FormFieldComponent, MatIcon, InputComponent, MatIconButton, ReactiveFormsModule],
  host: {
    '[@inputWidth]': "isInputFocusMode ? 'expanded' : 'collapsed'",
  },
  animations: [inputCollapseAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInputComponent {
  public messageFormControl = input.required<FormControl<string | null>>();

  public onBlurInput = output<void>();
  public inputFocusMode = output<boolean>();
  public inputValueChanges = output<string | null>();

  public isInputFocusMode: boolean = false;

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
