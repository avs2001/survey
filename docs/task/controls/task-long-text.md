# Frontend Task: Long Text Component

Create the multi-line text area component per the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Multi-line textarea with the same length validations as the short text control.
- Expose typed signals via `model()`.
- Show errors using `@if`.

## Tasks
1. Generate `long-text` component in its own folder.
2. Support `required`, `minLength`, and `maxLength` inputs.
3. Provide a signal for value updates through `model()`.
4. Render validation messages when limits are exceeded.
5. Add a Jest test for validation and emitted value.

## Best Practices
- Keep templates simple and free of logic.
- Include SCSS and tests alongside the component.
- Follow standards defined in [AGENTS.md](../../../AGENTS.md).
