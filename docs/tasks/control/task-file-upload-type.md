# File Upload Control

## Description
Provide an upload control where administrators can specify accepted file types, maximum size, and whether uploading is mandatory. Files exceeding limits or of unsupported types must be rejected with clear feedback.

## Preconditions
- Questionnaire administration interface exists.

## Potential Errors or Edge Cases
- Uploading files larger than allowed must be blocked gracefully.
- Unsupported formats should display informative error messages.

## Related Tasks
- [../task-applicant-interface.md](../task-applicant-interface.md)
