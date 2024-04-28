import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'ui-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent implements AfterViewInit {
  public elementRef = inject(ElementRef);

  public ngAfterViewInit(): void {
    this._addPaddingInInputWhenPreffix();
  }

  private _addPaddingInInputWhenPreffix(): void {
    const preffixElement = this.elementRef.nativeElement.querySelector('[preffix]') as HTMLElement;
    const inputElement = this.elementRef.nativeElement.querySelector('[ui-input]') as HTMLInputElement;

    if (preffixElement) {
      inputElement.classList.add('padding-left-when-preffix');
    }
  }
}
