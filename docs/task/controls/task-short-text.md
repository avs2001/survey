# Frontend Task: Short Text Component

Implement the standalone short text input control referenced in the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Single-line text input with minimum and maximum length validation.
- Expose value and validity via `model()` using signals.
- Display validation errors with `@if` blocks only.

## Tasks
1. Generate `short-text` component in a kebab-case folder.
2. Accept inputs for `required`, `minLength`, and `maxLength`.
3. Emit updates through a signal returned from `model()`.
4. Show inline error messages when constraints are violated.
5. Provide a Jest test verifying validation and signal output.

## Best Practices
- Keep templates free of complex logic.
- Store component file, HTML, SCSS, and tests together.
- Follow the coding standards from [AGENTS.md](../../../AGENTS.md).
