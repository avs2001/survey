export interface Questionnaire {
  programId: string;
  version: number;
  isPublished: boolean;
  questions: Question[];
  dependencies: Dependency[];
}

export interface Question {
  order: number;
  type: 'short_text' | 'long_text' | 'single_choice' | 'multiple_choice' | 'date' | 'file_upload' | 'video_link';
  label: string;
  initialVisibility: 'show' | 'hidden';
  isRequired: boolean;
  options?: string[]; // for choice questions
  allowedFileTypes?: string; // for file_upload
}

export interface Dependency {
  sourceQuestionOrder: number;
  sourceAnswerOptionLabel: string;
  targetQuestionOrder: number;
  action: 'show' | 'hide';
}
