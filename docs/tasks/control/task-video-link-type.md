# Video Link Control

## Description
Implement a text input that accepts a URL to a video. Administrators can restrict allowed video formats and specify whether providing a link is mandatory. Invalid or unsupported links should be rejected with clear feedback. Supported providers may include YouTube and Vimeo, and the control should display a preview thumbnail when possible.

## Preconditions
- Questionnaire administration interface exists.
- URL validator and preview service are available.

## Potential Errors or Edge Cases
- Invalid URLs must trigger validation messages.
- Links to unsupported formats should be rejected.
- Shortened URLs may bypass validation and need to be expanded before checking.

## Technical Details
- Implement the control as a standalone component with a regular `<input type="url">` element.
- Allow configuration of accepted providers through an injected validator service.
- Provide `required`, `placeholder` and `preview` options via component inputs.
- Fetch and display a thumbnail preview when the URL is valid using the preview service.
- Implement `ControlValueAccessor` with `OnPush` change detection so it integrates seamlessly with reactive forms.

## Related Tasks
- [../task-applicant-interface.md](../task-applicant-interface.md)
