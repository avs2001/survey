# Common Control Interface

Every input control component should share a consistent API so that the questionnaire renderer can treat them uniformly. The interface below describes the minimal contract that each control must implement.

## Interface Definition
```ts
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
```

Controls may expose additional `@Input()` properties specific to their type (for example `minDate` for date inputs or `accept` for file uploads). All components must be standalone, use the `OnPush` change detection strategy and rely on signals for internal state.
