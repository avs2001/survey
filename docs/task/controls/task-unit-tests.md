# Frontend Task: Component Unit Tests

Write Jest tests for each input control component defined in this folder.

## Goals
- Cover validation rules and signal outputs for short text, long text, multiple choice, single choice, date input, file upload, and video link components.

## Tasks
1. Set up Jest configuration if not already available in the project.
2. For each component, test valid and invalid input scenarios.
3. Verify that `model()` signals emit the correct values and validity state.
4. Ensure edge cases such as minimum selections and file type restrictions are tested.

## Best Practices
- Keep tests in the same folder as the component they cover.
- Follow naming conventions from [AGENTS.md](../../../AGENTS.md).
