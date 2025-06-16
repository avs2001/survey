# Frontend Task: Video Link Component

Create the video URL input component as specified in the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Provide a text field for entering a video link.
- Validate that the input is a well-formed URL.
- Expose the value and validity via `model()` using signals.

## Tasks
1. Generate `video-link` component in a dedicated folder.
2. Accept `required` flag and perform basic URL validation.
3. Use signals to store the entered URL and validation state.
4. Display validation errors with `@if` blocks.
5. Supply a Jest test for URL validation and signal output.

## Best Practices
- Keep the component folder self-contained.
- Avoid complex template logic; rely on control flow blocks.
- Follow [AGENTS.md](../../../AGENTS.md) coding standards.
