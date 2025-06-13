export interface Questionnaire {
  programId: string;
  version: number;
  isPublished: boolean;
  questions: Question[];
  dependencies: Dependency[];
}

export interface Question {
  order: number;
  type:
    | 'short_text'
    | 'long_text'
    | 'single_choice'
    | 'multiple_choice'
    | 'date'
    | 'file_upload'
    | 'video_link';
  label: string;
  initialVisibility: 'show' | 'hidden';
  isRequired: boolean;
  /** Text type specific */
  minLength?: number;
  maxLength?: number;
  /** Choice type specific */
  answerOptions?: { label: string }[];
  allowManualEntry?: boolean;
  manualEntryMinLength?: number;
  manualEntryMaxLength?: number;
  minSelections?: number;
  /** Date type specific */
  minDate?: string;
  maxDate?: string;
  /** File upload specific */
  acceptedFileTypes?: string[];
  maxFileSizeMB?: number;
  /** Backwards compatibility fields */
  options?: string[];
  allowedFileTypes?: string;
}

export interface Dependency {
  sourceQuestionOrder: number;
  sourceAnswerOptionLabel: string;
  targetQuestionOrder: number;
  action: 'show' | 'hide';
}
