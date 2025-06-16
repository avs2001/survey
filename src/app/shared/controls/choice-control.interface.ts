export interface ChoiceControlValue {
  /** Selected option(s). SingleChoice uses a string, MultipleChoice uses a string[]. */
  selection: string | string[];
  /** Value from the optional manual input. */
  manual: string;
}

export interface ChoiceControl<T extends string | string[]> {
  /** ARIA label and form control name. */
  name: string;
  /** Options displayed to the user. */
  options: string[];
  /** Whether a selection or manual entry is required. */
  required: boolean;
  /** Allow entering a custom value. */
  allowManualEntry: boolean;
  /** Label shown for the manual text field. */
  manualLabel: string;
  /** Minimum allowed length for manual input. */
  manualMinLength: number;
  /** Maximum allowed length for manual input. */
  manualMaxLength: number;
  /** Model output for the host form. */
  value: import('@angular/core').WritableSignal<ChoiceControlValue & { selection: T }>;
}
