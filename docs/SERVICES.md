# API Service Guide

This document defines the standard Angular services used across the Sephora Accelerate Questionnaire Project. Both the **Admin Portal** and **Applicant Portal** rely on these services to load questionnaires and submit responses.

## QuestionnaireService

Responsible for managing questionnaires. It simulates API calls using local data and is ready to be wired to a real backend later.

### Responsibilities
- Load all questionnaires
- Load a single questionnaire by `programId`
- Save questionnaire changes
- Publish or unpublish a questionnaire
- Expose an `isLoading` signal for UI feedback

### Public API

```typescript
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, defer, of, delay, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {
  private readonly store = new Map<string, Questionnaire>();
  readonly isLoading: WritableSignal<boolean> = signal(false);

  getQuestionnaires(): Observable<Questionnaire[]> {
    this.isLoading.set(true);
    return defer(() => {
      const list = [...this.store.values()];
      return of(list).pipe(
        delay(300),
        tap(() => this.isLoading.set(false))
      );
    });
  }

  getQuestionnaire(programId: string): Observable<Questionnaire> {
    this.isLoading.set(true);
    return defer(() => {
      const data = this.store.get(programId)!;
      return of(data).pipe(
        delay(300),
        tap(() => this.isLoading.set(false))
      );
    });
  }

  saveQuestionnaire(questionnaire: Questionnaire): Observable<void> {
    this.isLoading.set(true);
    return defer(() => {
      this.store.set(questionnaire.programId, questionnaire);
      return of(void 0).pipe(
        delay(300),
        tap(() => this.isLoading.set(false))
      );
    });
  }

  publishQuestionnaire(programId: string): Observable<void> {
    return this.updatePublishState(programId, true);
  }

  unpublishQuestionnaire(programId: string): Observable<void> {
    return this.updatePublishState(programId, false);
  }

  private updatePublishState(programId: string, state: boolean): Observable<void> {
    this.isLoading.set(true);
    return defer(() => {
      const q = this.store.get(programId);
      if (q) {
        q.isPublished = state;
      }
      return of(void 0).pipe(
        delay(300),
        tap(() => this.isLoading.set(false))
      );
    });
  }
}
```

### Usage in Components

```typescript
import { Component, effect } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  template: `@if (questionnaireService.isLoading()) { Loading... }`
})
export class AdminDashboardComponent {
  questionnaires$ = this.qService.getQuestionnaires();

  constructor(private qService: QuestionnaireService) {
    effect(() => {
      // React to isLoading if needed
    });
  }
}
```

## ResponseService

Handles applicant responses and tracks submission state.

### Responsibilities
- Submit applicant responses to a questionnaire
- Expose an `isSubmitting` signal

### Public API

```typescript
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, defer, of, delay, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResponseService {
  readonly isSubmitting: WritableSignal<boolean> = signal(false);

  submitResponse(programId: string, responseData: any): Observable<void> {
    this.isSubmitting.set(true);
    return defer(() => of(void 0).pipe(
      delay(300),
      tap(() => this.isSubmitting.set(false))
    ));
  }
}
```

### Usage in Components

```typescript
import { Component } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  standalone: true,
  selector: 'app-questionnaire-viewer',
  template: `
    <button [disabled]="responseService.isSubmitting()" (click)="submit()">Submit</button>
  `
})
export class QuestionnaireViewerComponent {
  constructor(public responseService: ResponseService) {}

  submit() {
    const response = { /* ...form data... */ };
    this.responseService.submitResponse('id', response).subscribe();
  }
}
```

## Models

```typescript
interface Questionnaire {
  programId: string;
  version: number;
  isPublished: boolean;
  questions: Question[];
  dependencies: Dependency[];
}

interface Question {
  order: number;
  type: 'short_text' | 'long_text' | 'single_choice' | 'multiple_choice' | 'date' | 'file_upload' | 'video_link';
  label: string;
  initialVisibility: 'show' | 'hidden';
  isRequired: boolean;
  minLength?: number;
  maxLength?: number;
  minSelections?: number;
  answerOptions?: { label: string }[];
  allowManualEntry?: boolean;
  manualEntryMinLength?: number;
  manualEntryMaxLength?: number;
  minDate?: string;
  maxDate?: string;
  acceptedFileTypes?: string[];
  maxFileSizeMB?: number;
}

interface Dependency {
  sourceQuestionOrder: number;
  sourceAnswerOptionLabel: string;
  targetQuestionOrder: number;
  action: 'show' | 'hide';
}
```

## Notes
- Services are provided in `root` so they can be shared across both portals.
- All API calls are simulated with `defer` and `of` operators; replace these sections with real HTTP calls when a backend is available.
- Signals provide an easy way to show loading or submitting indicators in templates using `service.isLoading()` or `service.isSubmitting()`.
- Observables returned by the service make it easy to combine with other RxJS streams or `async` pipes in templates.
- These services follow Angular 20 best practices with signals and standalone components for a modern architecture.

