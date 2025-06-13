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

## Technical Details
- Build a standalone component wrapping an `<input type="file">` element and implement `ControlValueAccessor`.
- Accept configuration inputs for `accept`, `maxSize`, `required` and a custom upload service via injection token.
- Validate file size and type before initiating the upload and surface errors through the form control state.
- Show selected file name and progress using Angular signals; provide a remove option before submission.
- Perform uploads through the provided service so storage implementations remain swappable.

## Related Tasks
- [../task-applicant-interface.md](../task-applicant-interface.md)
