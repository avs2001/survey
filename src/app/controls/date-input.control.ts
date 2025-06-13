import { Component, Input, signal, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';

@Component({
  selector: 'survey-date-input',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputControl),
    multi: true
  }],
  template: `
    <label [attr.for]="id">{{ label }}</label>
    <input type="date" [id]="id" [attr.placeholder]="placeholder" [min]="minDate" [max]="maxDate" [value]="value()" (input)="change($any($event.target).value)" (blur)="touched()"/>
  `,
  styles: [':host{display:block;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputControl implements SurveyControl<string> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() minDate?: string;
  @Input() maxDate?: string;

  value = signal('');
  private onChange = (v: string) => {};
  private onTouched = () => {};

  writeValue(obj: string | null): void {
    this.value.set(obj ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  change(v: string): void {
    this.value.set(v);
    this.onChange(v);
  }

  touched(): void {
    this.onTouched();
  }

  validate(): ValidationErrors | null {
    const v = this.value();
    if (!v) return this.required ? { required: true } : null;
    if (this.minDate && v < this.minDate) return { minDate: true };
    if (this.maxDate && v > this.maxDate) return { maxDate: true };
    return null;
  }
}
