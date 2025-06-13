export type QuestionType =
  | 'shortText'
  | 'longText'
  | 'singleChoice'
  | 'multipleChoices'
  | 'date'
  | 'file'
  | 'video';

export interface BaseQuestion {
  id: string;
  label: string;
  type: QuestionType;
  required?: boolean;
  placeholder?: string;
}

export interface ShortTextQuestion extends BaseQuestion {
  type: 'shortText';
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
}

export interface LongTextQuestion extends BaseQuestion {
  type: 'longText';
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'singleChoice';
  options: import('./controls').SingleChoiceOption[];
  orientation?: 'horizontal' | 'vertical';
  defaultValue?: string;
  otherAllowed?: boolean;
  otherLength?: number;
}

export interface MultipleChoicesQuestion extends BaseQuestion {
  type: 'multipleChoices';
  options: import('./controls').Choice[];
  minSelections?: number;
  maxSelections?: number;
  randomize?: boolean;
  otherAllowed?: boolean;
  otherLength?: number;
}

export interface DateInputQuestion extends BaseQuestion {
  type: 'date';
  minDate?: string;
  maxDate?: string;
}

export interface FileUploadQuestion extends BaseQuestion {
  type: 'file';
  accept?: string;
  maxSize?: number;
}

export interface VideoLinkQuestion extends BaseQuestion {
  type: 'video';
}

export type Question =
  | ShortTextQuestion
  | LongTextQuestion
  | SingleChoiceQuestion
  | MultipleChoicesQuestion
  | DateInputQuestion
  | FileUploadQuestion
  | VideoLinkQuestion;

