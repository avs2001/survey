import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DirectShortTextControl,
  DirectLongTextControl,
  SingleChoiceControl,
  MultipleChoicesControl,
  DateInputControl,
  FileUploadControl,
  VideoLinkControl
} from './controls';
import { Question } from './question.model';

@Component({
  selector: 'survey-questionnaire',
  standalone: true,
  imports: [
    FormsModule,
    DirectShortTextControl,
    DirectLongTextControl,
    SingleChoiceControl,
    MultipleChoicesControl,
    DateInputControl,
    FileUploadControl,
    VideoLinkControl
  ],
  template: `
    <form #f="ngForm" (ngSubmit)="submit()">
      @for (q of questions; track q.id) {
        @switch (q.type) {
          @case ('shortText') {
            <survey-direct-short-text
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [placeholder]="q.placeholder"
              [minLength]="q.minLength"
              [maxLength]="q.maxLength"
              [pattern]="q.pattern as string | RegExp"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-direct-short-text>
          }
          @case ('longText') {
            <survey-direct-long-text
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [placeholder]="q.placeholder"
              [minLength]="q.minLength"
              [maxLength]="q.maxLength"
              [pattern]="q.pattern as string | RegExp"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-direct-long-text>
          }
          @case ('singleChoice') {
            <survey-single-choice
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [options]="q.options"
              [orientation]="q.orientation ?? 'vertical'"
              [defaultValue]="q.defaultValue"
              [otherAllowed]="!!q.otherAllowed"
              [otherLength]="q.otherLength ?? 0"
              [placeholder]="q.placeholder"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-single-choice>
          }
          @case ('multipleChoices') {
            <survey-multiple-choices
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [options]="q.options"
              [minSelections]="q.minSelections ?? 0"
              [maxSelections]="q.maxSelections ?? 0"
              [randomize]="!!q.randomize"
              [otherAllowed]="!!q.otherAllowed"
              [otherLength]="q.otherLength ?? 0"
              [placeholder]="q.placeholder"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-multiple-choices>
          }
          @case ('date') {
            <survey-date-input
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [placeholder]="q.placeholder"
              [minDate]="q.minDate"
              [maxDate]="q.maxDate"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-date-input>
          }
          @case ('file') {
            <survey-file-upload
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [accept]="q.accept"
              [maxSize]="q.maxSize ?? 0"
              [placeholder]="q.placeholder"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-file-upload>
          }
          @case ('video') {
            <survey-video-link
              [id]="q.id"
              [label]="q.label"
              [required]="!!q.required"
              [placeholder]="q.placeholder"
              [ngModel]="answers()[q.id]"
              (ngModelChange)="setAnswer(q.id, $event)"
            ></survey-video-link>
          }
        }
      }
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [':host{display:block;padding:1rem;} form{display:grid;gap:1rem;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent {
  questions: Question[] = [
    {
      id: 'brandName',
      label: 'Brand Name',
      type: 'shortText',
      required: true
    },
    {
      id: 'description',
      label: 'Brand Description',
      type: 'longText',
      required: true,
      maxLength: 500
    },
    {
      id: 'category',
      label: 'Product Category',
      type: 'singleChoice',
      required: true,
      options: [
        { id: 'skincare', label: 'Skincare' },
        { id: 'makeup', label: 'Makeup' },
        { id: 'fragrance', label: 'Fragrance' }
      ],
      otherAllowed: true,
      orientation: 'horizontal',
      defaultValue: 'makeup'
    },
    {
      id: 'markets',
      label: 'Target Markets',
      type: 'multipleChoices',
      options: [
        { id: 'us', label: 'United States' },
        { id: 'eu', label: 'Europe' },
        { id: 'asia', label: 'Asia' }
      ],
      minSelections: 1,
      otherAllowed: true
    },
    {
      id: 'founded',
      label: 'Founded Date',
      type: 'date',
      required: true
    },
    {
      id: 'pitch',
      label: 'Pitch Deck',
      type: 'file',
      accept: 'application/pdf',
      required: true
    },
    {
      id: 'video',
      label: 'Intro Video',
      type: 'video',
      placeholder: 'https://example.com/video'
    }
  ];

  answers = signal<Record<string, any>>({});

  setAnswer(id: string, value: any): void {
    this.answers.update(a => ({ ...a, [id]: value }));
  }

  submit(): void {
    console.log(this.answers());
  }
}
