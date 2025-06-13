# Direct Long Text Input Control

## Description
Provide a textarea control for multi-line answers. Administrators may configure minimum and maximum length limits. The control must validate input length and show helpful messages when rules are violated.

## Preconditions
- Questionnaire administration interface exists.

## Potential Errors or Edge Cases
- Very long input might impact performance or exceed storage limits.
- Browser autofill could insert text beyond allowed length.

## Related Tasks
- [task-direct-short-text-type.md](task-direct-short-text-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
