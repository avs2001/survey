import { Component, Input, computed, effect, model, signal } from '@angular/core';
import type { ChoiceControl, ChoiceControlValue } from '../choice-control.interface';
import { manualEntryError } from '../manual-entry-error';

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice.html',
  styleUrl: './multiple-choice.scss'
})
export class MultipleChoice implements ChoiceControl<string[]> {
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
  protected readonly dirty = signal(false);
  protected readonly manualDirty = signal(false);

  readonly value = model<
    ChoiceControlValue & { selection: string[] }
  >({ selection: [], manual: '' });

  readonly selectionErrorId = `mc-selection-error-${crypto.randomUUID()}`;
  readonly manualErrorId = `mc-manual-error-${crypto.randomUUID()}`;

  protected readonly selectionError = computed(() => {
    const count = this.selectedOptions().length;
    const hasManual = this.allowManualEntry && !!this.manualValue();
    const total = count + (hasManual ? 1 : 0);
    if (this.required && total === 0) {
      return 'Selection required';
    }
    if (this.minSelections && total < this.minSelections) {
      return `Select at least ${this.minSelections}`;
    }
    return '';
  });

  protected readonly manualError = computed(() =>
    manualEntryError(
      this.allowManualEntry,
      this.manualValue(),
      this.manualMinLength,
      this.manualMaxLength
    )
  );

  constructor() {
    effect(() => {
      this.value.set({ selection: this.selectedOptions(), manual: this.manualValue() });
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
    this.dirty.set(true);
    this.selectedOptions.update(values => {
      if (checked) {
        return values.includes(option) ? values : [...values, option];
      }
      return values.filter(v => v !== option);
    });
  }

  updateManual(val: string): void {
    this.manualDirty.set(true);
    this.dirty.set(true);
    this.manualValue.set(val);
  }
}
