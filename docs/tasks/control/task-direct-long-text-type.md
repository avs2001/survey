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

## Related Tasks
- [task-direct-short-text-type.md](task-direct-short-text-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
