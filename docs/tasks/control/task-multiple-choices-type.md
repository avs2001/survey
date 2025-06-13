# Multiple Choices Control

## Description
Create a checklist allowing applicants to select multiple options. Administrators define the available choices, specify a required minimum selection count, and may allow an "other" text entry with length limits. They can also set a maximum selection count and optionally randomize the order of options each time the form loads.

## Preconditions
- Questionnaire administration interface exists.
- Checkbox component is implemented.

## Potential Errors or Edge Cases
- Users submitting fewer selections than required must see a validation error.
- Manual "other" entry should respect configured length limits.
- Large sets of options could make the form difficult to navigate on small screens.

## Related Tasks
- [task-single-choice-type.md](task-single-choice-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
