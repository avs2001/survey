# Multiple Choices Control

## Description
Create a checklist allowing applicants to select multiple options. Administrators define the available choices, specify a required minimum selection count, and may allow an "other" text entry with length limits.

## Preconditions
- Questionnaire administration interface exists.

## Potential Errors or Edge Cases
- Users submitting fewer selections than required must see a validation error.
- Manual "other" entry should respect configured length limits.

## Related Tasks
- [task-single-choice-type.md](task-single-choice-type.md)
- [../task-applicant-interface.md](../task-applicant-interface.md)
