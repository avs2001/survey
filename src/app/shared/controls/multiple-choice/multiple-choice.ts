import { Component, Input, computed, effect, model, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MultipleChoiceValue {
  selections: string[];
  manual: string;
}

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './multiple-choice.html',
  styleUrl: './multiple-choice.scss'
})
export class MultipleChoice {
  @Input() options: string[] = [];
  @Input() required = false;
  @Input() minSelections = 0;
  @Input() allowManualEntry = false;
  @Input() manualMinLength = 0;
  @Input() manualMaxLength = Infinity;

  protected selectedOptions = signal<string[]>([]);
  protected manualValue = signal('');

  value = model<MultipleChoiceValue>({ selections: [], manual: '' });

  protected selectionError = computed(() => {
    const count = this.selectedOptions().length;
    if (this.required && count === 0) {
      return 'Selection required';
    }
    if (this.minSelections && count < this.minSelections) {
      return `Select at least ${this.minSelections}`;
    }
    return '';
  });

  protected manualError = computed(() => {
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

  toggle(option: string, checked: boolean) {
    const values = this.selectedOptions().slice();
    if (checked) {
      if (!values.includes(option)) {
        values.push(option);
      }
    } else {
      const idx = values.indexOf(option);
      if (idx !== -1) {
        values.splice(idx, 1);
      }
    }
    this.selectedOptions.set(values);
  }

  updateManual(val: string) {
    this.manualValue.set(val);
  }
}
