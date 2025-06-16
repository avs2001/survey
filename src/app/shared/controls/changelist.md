# Choice Controls Common Interface

## Overview
This changelist proposes aligning the `MultipleChoice` and `SingleChoice` components under a shared interface. Both controls allow selecting predefined options with an optional manual entry. Creating a base contract makes it easier to implement additional choice controls and ensures consistent behavior.

## Proposed Interface
```ts
interface ChoiceControlValue {
  /** Selected option(s). SingleChoice uses a string, MultipleChoice uses a string[]. */
  selection: string | string[];
  /** Value from the optional manual input. */
  manual: string;
}

interface ChoiceControl<T extends string | string[]> {
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
  value: WritableSignal<ChoiceControlValue & { selection: T }>;
}
```

### Notes
- `MultipleChoice` would specialize the `selection` type as `string[]` and expose a `minSelections` input.
- `SingleChoice` would specialize the `selection` type as `string`.
- Both controls already implement the same validation logic for manual input; this interface makes that explicit.

## Refactoring Steps
1. **Introduce `ChoiceControlValue` and `ChoiceControl` interfaces** in a shared file, e.g. `src/app/shared/controls/choice-control.interface.ts`.
2. **Update `MultipleChoice` and `SingleChoice`** to implement `ChoiceControl` with their respective generic parameter.
3. **Replace duplicate manual validation logic** with a helper function used by both components.
4. **Ensure existing unit tests pass** and add tests for any new helper utilities.
