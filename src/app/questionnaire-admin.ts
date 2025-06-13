import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question, QuestionType } from './question.model';

@Component({
  selector: 'survey-questionnaire-admin',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Questions</h2>
    <ul>
      @for (q of questions(); track q.id; let i = index) {
        <li>
          <input [ngModel]="q.id" (ngModelChange)="updateQuestion(i, { id: $event })" placeholder="Id" />
          <input [ngModel]="q.label" (ngModelChange)="updateQuestion(i, { label: $event })" placeholder="Label" />
          <select [ngModel]="q.type" (ngModelChange)="updateQuestion(i, { type: $event })">
            @for (t of types; track t) { <option [ngValue]="t">{{ t }}</option> }
          </select>
          <label>
            <input type="checkbox" [ngModel]="q.required" (ngModelChange)="updateQuestion(i, { required: $event })" />
            Required
          </label>
          <button type="button" (click)="moveUp(i)">↑</button>
          <button type="button" (click)="moveDown(i)">↓</button>
          <button type="button" (click)="deleteQuestion(i)">✕</button>
        </li>
      }
    </ul>
    <h3>Add Question</h3>
    <form (ngSubmit)="addQuestion()" #f="ngForm">
      <input
        name="id"
        [ngModel]="newQuestion().id"
        (ngModelChange)="newQuestion.update(q => ({ ...q, id: $event }))"
        placeholder="Id"
        required
      />
      <input
        name="label"
        [ngModel]="newQuestion().label"
        (ngModelChange)="newQuestion.update(q => ({ ...q, label: $event }))"
        placeholder="Label"
        required
      />
      <select
        name="type"
        [ngModel]="newQuestion().type"
        (ngModelChange)="newQuestion.update(q => ({ ...q, type: $event }))"
      >
        @for (t of types; track t) { <option [ngValue]="t">{{ t }}</option> }
      </select>
      <label>
        <input
          type="checkbox"
          name="required"
          [ngModel]="newQuestion().required"
          (ngModelChange)="newQuestion.update(q => ({ ...q, required: $event }))"
        />
        Required
      </label>
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
    ':host{display:block;padding:1rem;} ul{list-style:none;padding:0;} li{display:grid;grid-template-columns:repeat(5,1fr) auto auto auto;gap:.5rem;margin-bottom:.5rem;} form{display:grid;grid-template-columns:repeat(4,1fr) auto;gap:.5rem;margin-top:1rem;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireAdminComponent {
  types: QuestionType[] = ['shortText', 'longText', 'singleChoice', 'multipleChoices', 'date', 'file', 'video'];
  questions = signal<Question[]>([]);
  newQuestion = signal<{ id: string; label: string; type: QuestionType; required: boolean }>({
    id: '',
    label: '',
    type: 'shortText',
    required: false
  });

  addQuestion(): void {
    const q = this.newQuestion();
    if (!q.id || !q.label) return;
    this.questions.update(qs => [...qs, { ...q } as Question]);
    this.newQuestion.set({ id: '', label: '', type: 'shortText', required: false });
  }

  updateQuestion(index: number, patch: Partial<Question>): void {
    this.questions.update(qs => {
      const copy = [...qs];
      copy[index] = { ...copy[index], ...patch } as Question;
      return copy;
    });
  }

  deleteQuestion(index: number): void {
    this.questions.update(qs => qs.filter((_, i) => i !== index));
  }

  moveUp(index: number): void {
    if (index === 0) return;
    this.questions.update(qs => {
      const copy = [...qs];
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return copy;
    });
  }

  moveDown(index: number): void {
    this.questions.update(qs => {
      if (index >= qs.length - 1) return qs;
      const copy = [...qs];
      [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
      return copy;
    });
  }
}
