import { Component, Input, computed, effect, model, signal } from '@angular/core';

interface MultipleChoiceValue {
  selections: string[];
  manual: string;
}

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice.html',
  styleUrl: './multiple-choice.scss'
})
export class MultipleChoice {
  @Input() name = '';
  @Input() options: string[] = [];
  @Input() required = false;
  @Input() minSelections = 0;
  @Input() allowManualEntry = false;
  @Input() manualLabel = 'Other';
  @Input() manualMinLength = 0;
  @Input() manualMaxLength = Infinity;

  protected readonly selectedOptions = signal<string[]>([]);
  protected readonly manualValue = signal('');

  readonly value = model<MultipleChoiceValue>({ selections: [], manual: '' });

  readonly selectionErrorId = `mc-selection-error-${crypto.randomUUID()}`;
  readonly manualErrorId = `mc-manual-error-${crypto.randomUUID()}`;

  protected readonly selectionError = computed(() => {
    const count = this.selectedOptions().length;
    if (this.required && count === 0) {
      return 'Selection required';
    }
    if (this.minSelections && count < this.minSelections) {
      return `Select at least ${this.minSelections}`;
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
      this.value.set({ selections: this.selectedOptions(), manual: this.manualValue() });
    });
  }

  isSelected(option: string): boolean {
    return this.selectedOptions().includes(option);
  }

  onToggle(event: Event, option: string): void {
    const checked = (event.target as HTMLInputElement | null)?.checked ?? false;
    this.toggle(option, checked);
  }

  onManual(event: Event): void {
    const value = (event.target as HTMLInputElement | null)?.value ?? '';
    this.updateManual(value);
  }

  toggle(option: string, checked: boolean): void {
    this.selectedOptions.update(values => {
      if (checked) {
        return values.includes(option) ? values : [...values, option];
      }
      return values.filter(v => v !== option);
    });
  }

  updateManual(val: string): void {
    this.manualValue.set(val);
  }
}
