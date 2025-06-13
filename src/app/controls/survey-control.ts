import { ControlValueAccessor, ValidationErrors } from '@angular/forms';
import { Signal } from '@angular/core';

export interface SurveyControl<T> extends ControlValueAccessor {
  /** Unique identifier for the question */
  id: string;
  /** Display label shown to applicants */
  label: string;
  /** Whether a value is required */
  required: boolean;
  /** Optional placeholder text */
  placeholder?: string;
  /** Internal reactive value */
  value: Signal<T>;
  /** Validate the current value */
  validate(): ValidationErrors | null;
}
