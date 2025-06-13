import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question } from '../models/questionnaire.model';
import { InputGroupComponent } from '../kebormed-core/input-group.component';

@Component({
  selector: 'app-question-renderer',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroupComponent],
  templateUrl: './question-renderer.component.html',
  styleUrls: ['./question-renderer.component.scss']
})
export class QuestionRendererComponent implements OnChanges {
  @Input({ required: true }) question!: Question;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  // used for multiple choice manual entry
  protected manualValue = signal('');

  protected isPredefinedOption(val: string | undefined): boolean {
    return !!val && (this.question.answerOptions?.some(o => o.label === val) ?? false);
  }

  protected manualEntryDisplay(val: string | undefined): string {
    return val && !this.isPredefinedOption(val) ? val : '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes && this.question?.type === 'multiple_choice' && this.question.allowManualEntry) {
      const val = changes['value'].currentValue as string[] | undefined;
      if (Array.isArray(val)) {
        const manual = val.find(v => !this.question.answerOptions?.some(o => o.label === v));
        this.manualValue.set(manual || '');
      }
    }
  }

  protected onTextInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }

  protected onRadioSelect(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }

  protected onCheckboxToggle(label: string, checked: boolean) {
    const current: string[] = Array.isArray(this.value) ? [...this.value] : [];
    if (checked) {
      if (!current.includes(label)) current.push(label);
    } else {
      const idx = current.indexOf(label);
      if (idx > -1) current.splice(idx, 1);
    }
    // also include manual entry if it exists
    if (this.question.allowManualEntry && this.manualValue()) {
      const manual = this.manualValue();
      if (!current.includes(manual)) current.push(manual);
    }
    this.valueChange.emit(current);
  }

  protected onManualEntryInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.manualValue.set(val);
    const selections = Array.isArray(this.value)
      ? this.value.filter(v => this.question.answerOptions?.some(o => o.label === v))
      : [];
    if (val) {
      this.valueChange.emit([...selections, val]);
    } else {
      this.valueChange.emit(selections);
    }
  }

  protected onDateSelect(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }

  protected onFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.valueChange.emit(files?.[0] || null);
  }
}
