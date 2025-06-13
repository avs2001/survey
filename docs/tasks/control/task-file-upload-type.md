# File Upload Control

## Description
Provide an upload control where administrators can specify accepted file types, maximum size, and whether uploading is mandatory. Files exceeding limits or of unsupported types must be rejected with clear feedback. The interface should show the selected file name, allow removal before submission, and display an upload progress bar when applicable.

## Preconditions
- Questionnaire administration interface exists.
- File storage backend is accessible.

## Potential Errors or Edge Cases
- Uploading files larger than allowed must be blocked gracefully.
- Unsupported formats should display informative error messages.
- Network interruptions while uploading should allow retrying without losing other form data.

## Related Tasks
- [../task-applicant-interface.md](../task-applicant-interface.md)
