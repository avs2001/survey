# Direct Long Text Input Control

## Description
Provide a textarea control for multi-line answers. Administrators may configure minimum and maximum length limits. The control must validate input length and show helpful messages when rules are violated. It should display a remaining character count and may enforce a pattern, such as disallowing HTML tags.

## Preconditions
- Questionnaire administration interface exists.
- Shared validation message component is available.

## Potential Errors or Edge Cases
- Very long input might impact performance or exceed storage limits.
- Browser autofill could insert text beyond allowed length.
- Mobile browsers may auto-capitalize or insert line breaks unexpectedly.

## Technical Details
- Provide a standalone `<textarea>` component that implements `ControlValueAccessor`.
- Inputs should include `minLength`, `maxLength`, `pattern`, `placeholder` and `required`.
- Display a live remaining character count using a signal derived from the current value length.
- Reject input containing HTML tags through a configurable regular expression.
- Use `OnPush` change detection and keep internal state in signals.

## Related Tasks
- [task-direct-short-text-type.md](task-direct-short-text-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
