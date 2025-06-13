import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupComponent } from '../kebormed-core/input-group.component';
import { Question } from '../models/questionnaire.model';

function createEmptyQuestion(): Question & { acceptedFileTypesStr?: string } {
  return {
    order: 1,
    type: 'short_text',
    label: '',
    initialVisibility: 'show',
    isRequired: false,
    acceptedFileTypesStr: ''
  };
}

@Component({
  selector: 'app-question-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroupComponent],
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnChanges {
  @Input() question: Question | null = null;
  @Output() save = new EventEmitter<Question>();
  @Output() cancel = new EventEmitter<void>();

  protected editing = signal<(Question & { acceptedFileTypesStr?: string })>(createEmptyQuestion());

  ngOnChanges(changes: SimpleChanges): void {
    if ('question' in changes) {
      const q = changes['question'].currentValue as Question | null;
      if (q) {
        this.editing.set({
          ...q,
          acceptedFileTypesStr: (q.acceptedFileTypes || []).join(',')
        } as any);
      } else {
        this.editing.set(createEmptyQuestion());
      }
    }
  }

  protected onSave() {
    const q = { ...this.editing() } as Question & { acceptedFileTypesStr?: string };
    const processed: Question = { ...q } as Question;
    if (typeof q.acceptedFileTypesStr === 'string') {
      processed.acceptedFileTypes = q.acceptedFileTypesStr
        .split(',')
        .map(t => t.trim())
        .filter(t => !!t);
    }
    delete (processed as any).acceptedFileTypesStr;
    this.save.emit(processed);
  }

  protected onCancel() {
    this.cancel.emit();
  }
}
