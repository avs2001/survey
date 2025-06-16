import { Component, Input, computed, effect, model, signal } from '@angular/core';
import type { ChoiceControl, ChoiceControlValue } from '../choice-control.interface';
import { manualEntryError } from '../manual-entry-error';

@Component({
  selector: 'app-single-choice',
  standalone: true,
  imports: [],
  templateUrl: './single-choice.html',
  styleUrl: './single-choice.scss'
})
export class SingleChoice implements ChoiceControl<string> {
  @Input() name = '';
  @Input() options: string[] = [];
  @Input() required = false;
  @Input() allowManualEntry = false;
  @Input() manualLabel = 'Other';
  @Input() manualMinLength = 0;
  @Input() manualMaxLength = Infinity;

  protected readonly selected = signal('');
  protected readonly manualValue = signal('');
  protected readonly dirty = signal(false);
  protected readonly manualDirty = signal(false);

  readonly value = model<
    ChoiceControlValue & { selection: string }
  >({ selection: '', manual: '' });

  readonly selectionErrorId = `sc-selection-error-${crypto.randomUUID()}`;
  readonly manualErrorId = `sc-manual-error-${crypto.randomUUID()}`;

  protected readonly selectionError = computed(() => {
    const selection = this.selected();
    const manual = this.manualValue();
    if (this.required && !selection && !manual) {
      return 'Selection required';
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
    this.dirty.set(true);
    this.selected.set(option);
    this.manualValue.set('');
  }

  updateManual(val: string): void {
    this.manualDirty.set(true);
    this.dirty.set(true);
    this.manualValue.set(val);
    this.selected.set('');
  }
}
