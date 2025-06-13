import { Component, Input, signal, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';

export interface SingleChoiceOption {
  id: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'survey-single-choice',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SingleChoiceControl),
    multi: true
  }],
  template: `
    <fieldset [class.horizontal]="orientation === 'horizontal'">
      <legend>{{ label }}</legend>
      @for (c of options; track c.id) {
        <label>
          <input type="radio" [name]="id" [value]="c.id" [disabled]="c.disabled" [checked]="value() === c.id" (change)="select(c.id)" />
          {{ c.label }}
        </label>
      }
      @if (otherAllowed) {
        <label>
          Other: <input type="text" [value]="other()" (input)="setOther($any($event.target).value)" (blur)="touched()" />
        </label>
      }
    </fieldset>
  `,
  styles: [
    ':host{display:block;}',
    'fieldset.horizontal{display:flex;gap:.5rem;}',
    'fieldset.horizontal label{display:inline-flex;align-items:center;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleChoiceControl implements SurveyControl<string | { other: string } | null> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() options: SingleChoiceOption[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';
  @Input() defaultValue?: string;
  @Input() otherAllowed = false;
  @Input() otherLength = 0;

  value = signal<string>('');
  other = signal('');

  private onChange = (v: string | { other: string } | null) => {};
  private onTouched = () => {};

  writeValue(obj: string | { other: string } | null): void {
    if (typeof obj === 'string') {
      this.value.set(obj);
      this.other.set('');
    } else if (obj) {
      this.value.set('');
      this.other.set(obj.other);
    } else {
      this.value.set(this.defaultValue ?? '');
      this.other.set('');
    }
  }

  registerOnChange(fn: (v: string | { other: string } | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  select(id: string): void {
    this.value.set(id);
    this.other.set('');
    this.emit();
  }

  setOther(v: string): void {
    this.value.set('');
    this.other.set(v);
    this.emit();
  }

  private emit(): void {
    if (this.otherAllowed && this.other()) {
      this.onChange({ other: this.other() });
    } else if (this.value()) {
      this.onChange(this.value());
    } else {
      this.onChange(null);
    }
  }

  touched(): void { this.onTouched(); }

  validate(): ValidationErrors | null {
    const val = this.otherAllowed && this.other() ? this.other() : this.value();
    if (!val) return this.required ? { required: true } : null;
    if (this.otherAllowed && this.otherLength && this.other().length > this.otherLength) return { otherLength: true };
    return null;
  }
}
