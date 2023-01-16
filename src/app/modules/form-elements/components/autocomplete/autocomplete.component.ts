import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: [
    './autocomplete.component.scss',
    '../../form-elements.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutocompleteComponent,
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  @Input() public placeholder!: string;
  @Input() public disabled: boolean;
  @Input() public isError: boolean;
  @Input() public findOptions: string[];

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
