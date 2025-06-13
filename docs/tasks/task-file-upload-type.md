# File Upload Question Type

## Description
Provide a file upload control where administrators can specify accepted file types, maximum file size, and whether uploading is mandatory.

## Preconditions
- Questionnaire administration interface exists.

## Potential Errors or Edge Cases
- Uploading files larger than the allowed size must be rejected gracefully.
- Unsupported file formats should display a helpful error message.

## Related Tasks
- [task-applicant-interface.md](task-applicant-interface.md)
