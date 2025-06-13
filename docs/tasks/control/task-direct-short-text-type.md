# Direct Short Text Input Control

## Description
Implement a single-line text input for short answers. Administrators can configure minimum and maximum length limits. The control should enforce these limits and display validation messages when the user input does not comply. Placeholder text should be configurable and optional pattern restrictions (such as numeric only) may be enforced.

## Preconditions
- Questionnaire administration interface exists.
- Shared validation message component is available.

## Potential Errors or Edge Cases
- Input shorter or longer than allowed should trigger validation.
- Trimming spaces may affect length validation.
- Mobile keyboards may automatically capitalize or correct input.

## Related Tasks
- [task-direct-long-text-type.md](task-direct-long-text-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
