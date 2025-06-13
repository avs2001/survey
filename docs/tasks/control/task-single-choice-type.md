# Single Choice Control

## Description
Implement a radio button list where only one option can be selected. Administrators decide whether a selection is mandatory and may permit an "other" input with length constraints. They can choose a default option and configure whether choices are displayed horizontally or vertically.

## Preconditions
- Questionnaire administration interface exists.
- Radio button component is implemented.

## Potential Errors or Edge Cases
- Submitting without a selection when mandatory should show a validation error.
- "Other" entry must enforce configured length limits.
- Switching between an "other" entry and a predefined choice may leave stale values in the form state.

## Technical Details
- Build a standalone radio group component that uses `ControlValueAccessor` to communicate with parent forms.
- Inputs should include the list of choices, orientation (`horizontal` or `vertical`), `required`, default value and optional "other" settings.
- Manage the selected option with a signal and update the form control whenever it changes.
- Validate that a choice is selected when required and ensure "other" input respects configured length constraints.
- Utilize `OnPush` change detection for performance.

## Related Tasks
- [task-multiple-choices-type.md](task-multiple-choices-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
