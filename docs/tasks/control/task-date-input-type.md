# Date Input Control

## Description
Support a date input that can restrict acceptable dates using minimum and maximum values. Administrators may also mark the question as mandatory. The control should present a calendar picker and permit manual entry. Placeholder text and validation messages must be configurable.

## Preconditions
- Questionnaire administration interface exists.
- Date picker library is integrated into the project.

## Potential Errors or Edge Cases
- Invalid date formats should be rejected.
- Dates outside the allowed range must trigger validation errors.
- Time zone differences might cause valid dates to appear invalid.
- Configuration where the minimum date is after the maximum date should raise an admin warning.

## Related Tasks
- [../task-applicant-interface.md](../task-applicant-interface.md)
