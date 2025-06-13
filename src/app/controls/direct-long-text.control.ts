import { Component, Input, signal, ChangeDetectionStrategy, forwardRef, computed } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';

@Component({
  selector: 'survey-direct-long-text',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DirectLongTextControl),
    multi: true
  }],
  template: `
    <label [attr.for]="id">{{ label }}</label>
    <textarea [id]="id" [attr.placeholder]="placeholder" [attr.minlength]="minLength" [attr.maxlength]="maxLength" (input)="change($any($event.target).value)" (blur)="touched()">{{ value() }}</textarea>
    <small>{{ remaining() }} characters left</small>
  `,
  styles: [':host{display:block;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectLongTextControl implements SurveyControl<string> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() pattern?: string | RegExp;

  value = signal('');
  remaining = computed(() => this.maxLength ? this.maxLength - this.value().length : 0);

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
    if (this.minLength && v.length < this.minLength) return { minLength: true };
    if (this.maxLength && v.length > this.maxLength) return { maxLength: true };
    const regex = typeof this.pattern === 'string' ? new RegExp(this.pattern) : this.pattern;
    if (regex && !regex.test(v)) return { pattern: true };
    return null;
  }
}
