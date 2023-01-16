import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../../form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() public placeholder: string;
  @Input() public mask: string;
  @Input() public disabled: boolean;
  @Input() public hide: boolean = false;
  @Input() public isHideDeclared: boolean;
  @Input() public isError: boolean;

  public value: string;
  public onChange = (value: string): void => {};
  public onTouched = () => {};

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public get isHide(): string {
    return this.hide ? 'visibility_off' : 'visibility';
  }

  public get isPassword(): string {
    return this.hide ? 'password' : 'text';
  }

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
