import { Component, Input, computed, effect, model, signal } from '@angular/core';

interface SingleChoiceValue {
  selection: string;
  manual: string;
}

@Component({
  selector: 'app-single-choice',
  standalone: true,
  imports: [],
  templateUrl: './single-choice.html',
  styleUrl: './single-choice.scss'
})
export class SingleChoice {
  @Input() name = '';
  @Input() options: string[] = [];
  @Input() required = false;
  @Input() allowManualEntry = false;
  @Input() manualMinLength = 0;
  @Input() manualMaxLength = Infinity;

  protected readonly selected = signal('');
  protected readonly manualValue = signal('');

  readonly value = model<SingleChoiceValue>({ selection: '', manual: '' });

  readonly selectionErrorId = `sc-selection-error-${crypto.randomUUID()}`;
  readonly manualErrorId = `sc-manual-error-${crypto.randomUUID()}`;

  protected readonly selectionError = computed(() => {
    if (this.required && !this.selected()) {
      return 'Selection required';
    }
    return '';
  });

  protected readonly manualError = computed(() => {
    if (!this.allowManualEntry) return '';
    const val = this.manualValue();
    if (!val) return '';
    if (this.manualMinLength && val.length < this.manualMinLength) {
      return `Minimum length is ${this.manualMinLength}`;
    }
    if (this.manualMaxLength !== Infinity && val.length > this.manualMaxLength) {
      return `Maximum length is ${this.manualMaxLength}`;
    }
    return '';
  });

  constructor() {
    effect(() => {
      this.value.set({ selection: this.selected(), manual: this.manualValue() });
    });
  }

  isSelected(option: string): boolean {
    return this.selected() === option;
  }

  onSelect(event: Event, option: string): void {
    const checked = (event.target as HTMLInputElement | null)?.checked ?? false;
    if (checked) this.select(option);
  }

  onManual(event: Event): void {
    const value = (event.target as HTMLInputElement | null)?.value ?? '';
    this.updateManual(value);
  }

  select(option: string): void {
    this.selected.set(option);
    this.manualValue.set('');
  }

  updateManual(val: string): void {
    this.manualValue.set(val);
    this.selected.set('');
  }
}
