import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [
    './datepicker.component.scss',
    '../../form-elements.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatePickerComponent,
      multi: true,
    },
  ],
})
export class DatePickerComponent {
  @Input() public disabled: boolean;

  public value: string;
  public onChange = (value: string): void => {};
  public onTouched = () => {};

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public writeValue(input: string): void {
    this.value = input;
    this.changeDetector.markForCheck();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
