import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DirectShortTextControl,
  DirectLongTextControl,
  SingleChoiceControl,
  MultipleChoicesControl,
  DateInputControl,
  FileUploadControl,
  VideoLinkControl,
  Choice,
  SingleChoiceOption
} from './controls';

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
      <survey-direct-short-text
        name="brandName"
        id="brandName"
        label="Brand Name"
        required
        [(ngModel)]="brandName()"
        (ngModelChange)="brandName.set($event)"
      ></survey-direct-short-text>

      <survey-direct-long-text
        name="description"
        id="description"
        label="Brand Description"
        required
        [maxLength]="500"
        [(ngModel)]="description()"
        (ngModelChange)="description.set($event)"
      ></survey-direct-long-text>

      <survey-single-choice
        name="category"
        id="category"
        label="Product Category"
        required
        [options]="categories"
        otherAllowed
        [(ngModel)]="category"
      ></survey-single-choice>

      <survey-multiple-choices
        name="markets"
        id="markets"
        label="Target Markets"
        [options]="marketsOptions"
        [minSelections]="1"
        otherAllowed
        [(ngModel)]="markets"
      ></survey-multiple-choices>

      <survey-date-input
        name="founded"
        id="founded"
        label="Founded Date"
        required
        [(ngModel)]="founded"
      ></survey-date-input>

      <survey-file-upload
        name="pitch"
        id="pitch"
        label="Pitch Deck"
        accept="application/pdf"
        required
        [(ngModel)]="pitch"
      ></survey-file-upload>

      <survey-video-link
        name="video"
        id="video"
        label="Intro Video"
        placeholder="https://example.com/video"
        [(ngModel)]="video"
      ></survey-video-link>

      <button type="submit">Submit</button>
    </form>
  `,
  styles: [':host{display:block;padding:1rem;} form{display:grid;gap:1rem;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent {
  brandName = signal('');
  description = signal('');
  category: string | { other: string } | null = null;
  markets: (string | { other: string })[] = [];
  founded = '';
  pitch: File | null = null;
  video = '';

  categories: SingleChoiceOption[] = [
    { id: 'skincare', label: 'Skincare' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'fragrance', label: 'Fragrance' }
  ];

  marketsOptions: Choice[] = [
    { id: 'us', label: 'United States' },
    { id: 'eu', label: 'Europe' },
    { id: 'asia', label: 'Asia' }
  ];

  submit(): void {
    console.log({
      brandName: this.brandName(),
      description: this.description(),
      category: this.category,
      markets: this.markets,
      founded: this.founded,
      pitch: this.pitch?.name,
      video: this.video
    });
  }
}
