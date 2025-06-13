import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupComponent } from '../kebormed-core/input-group.component';
import { Questionnaire, Question, Dependency } from '../models/questionnaire.model';
import { DependencyEditorComponent } from './dependency-editor.component';

function createEmptyQuestion(order: number): Question & { acceptedFileTypesStr?: string } {
  return {
    order,
    type: 'short_text',
    label: '',
    initialVisibility: 'show',
    isRequired: false,
    acceptedFileTypesStr: ''
  };
}

@Component({
  selector: 'app-questionnaire-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroupComponent, DependencyEditorComponent],
  templateUrl: './questionnaire-editor.component.html',
  styleUrls: ['./questionnaire-editor.component.scss']
})
export class QuestionnaireEditorComponent {
  protected questionsSignal = signal<Question[]>([]);
  protected dependenciesSignal = signal<Dependency[]>([]);
  protected editingIndex = signal<number | null>(null);
  protected editingQuestion = signal<(Question & { acceptedFileTypesStr?: string }) | null>(null);
  protected showDependencies = signal(false);

  protected addQuestion() {
    const nextOrder = this.questionsSignal().length + 1;
    this.editingQuestion.set(createEmptyQuestion(nextOrder));
    this.editingIndex.set(-1);
  }

  protected editQuestion(index: number) {
    const q = this.questionsSignal()[index];
    const copy: any = {
      ...q,
      acceptedFileTypesStr: (q.acceptedFileTypes || []).join(',')
    };
    this.editingQuestion.set(copy);
    this.editingIndex.set(index);
  }

  protected cancelEdit() {
    this.editingIndex.set(null);
    this.editingQuestion.set(null);
  }

  protected saveQuestion() {
    const q = this.editingQuestion();
    if (!q) return;
    const processed: Question = { ...q } as Question;
    if (typeof (q as any).acceptedFileTypesStr === 'string') {
      processed.acceptedFileTypes = (q as any).acceptedFileTypesStr
        .split(',')
        .map((t: string) => t.trim())
        .filter((t: string) => !!t);
      delete (processed as any).acceptedFileTypesStr;
    }
    const idx = this.editingIndex();
    if (idx === -1) {
      this.questionsSignal.update(arr => [...arr, processed]);
    } else if (idx !== null) {
      this.questionsSignal.update(arr =>
        arr.map((item, i) => (i === idx ? processed : item))
      );
    }
    this.reorder();
    this.cancelEdit();
  }

  protected deleteQuestion(index: number) {
    this.questionsSignal.update(arr => arr.filter((_, i) => i !== index));
    this.reorder();
  }

  protected moveUp(index: number) {
    if (index === 0) return;
    const arr = [...this.questionsSignal()];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    this.questionsSignal.set(arr);
    this.reorder();
  }

  protected moveDown(index: number) {
    const arr = [...this.questionsSignal()];
    if (index >= arr.length - 1) return;
    [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
    this.questionsSignal.set(arr);
    this.reorder();
  }

  private reorder() {
    this.questionsSignal.update(arr => arr.map((q, i) => ({ ...q, order: i + 1 })));
  }

  protected openDependencies() {
    this.showDependencies.set(!this.showDependencies());
  }

  protected onDependenciesChange(deps: Dependency[]) {
    this.dependenciesSignal.set(deps);
  }

  protected saveQuestionnaire() {
    const questionnaire: Questionnaire = {
      programId: '',
      version: 1,
      isPublished: false,
      questions: this.questionsSignal(),
      dependencies: this.dependenciesSignal()
    };
    console.log('Save questionnaire', questionnaire);
  }
}
