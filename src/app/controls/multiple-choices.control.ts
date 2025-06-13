import { Component, Input, signal, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';

export interface Choice {
  id: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'survey-multiple-choices',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultipleChoicesControl),
    multi: true
  }],
  template: `
    <fieldset>
      <legend>{{ label }}</legend>
      @for (c of options(); track c.id) {
        <label>
          <input type="checkbox" [disabled]="c.disabled" [checked]="selected().includes(c.id)" (change)="toggle(c.id, $any($event.target).checked)" />
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
  styles: [':host{display:block;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleChoicesControl implements SurveyControl<(string | { other: string })[]> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() options: Choice[] = [];
  @Input() minSelections = 0;
  @Input() maxSelections = 0;
  @Input() randomize = false;
  @Input() otherAllowed = false;
  @Input() otherLength = 0;

  selected = signal<string[]>([]);
  other = signal('');

  private onChange = (v: (string | { other: string })[]) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    if (this.randomize) {
      this.options = [...this.options].sort(() => Math.random() - 0.5);
    }
  }

  writeValue(obj: (string | { other: string })[] | null): void {
    const ids: string[] = [];
    let other = '';
    obj?.forEach(v => {
      if (typeof v === 'string') ids.push(v); else other = v.other;
    });
    this.selected.set(ids);
    this.other.set(other);
  }

  registerOnChange(fn: (v: (string | { other: string })[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  toggle(id: string, checked: boolean): void {
    const arr = this.selected();
    if (checked) {
      if (!arr.includes(id)) arr.push(id);
    } else {
      const i = arr.indexOf(id);
      if (i >= 0) arr.splice(i, 1);
    }
    this.selected.set([...arr]);
    this.emit();
  }

  setOther(v: string): void {
    this.other.set(v);
    this.emit();
  }

  private emit(): void {
    const values: (string | { other: string })[] = [...this.selected()];
    if (this.otherAllowed && this.other()) values.push({ other: this.other() });
    this.onChange(values);
  }

  touched(): void {
    this.onTouched();
  }

  validate(): ValidationErrors | null {
    const count = this.selected().length;
    if (this.required && count === 0 && !this.other()) return { required: true };
    if (this.minSelections && count < this.minSelections) return { minSelections: true };
    if (this.maxSelections && count > this.maxSelections) return { maxSelections: true };
    if (this.otherAllowed && this.otherLength && this.other().length > this.otherLength) return { otherLength: true };
    return null;
  }
}
