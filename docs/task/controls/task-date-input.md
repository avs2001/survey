# Frontend Task: Date Input Component

Develop the date picker control according to the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Provide a date input respecting `required`, minimum, and maximum date constraints.
- Expose the selected date via `model()` using signals.

## Tasks
1. Generate `date-input` component in its own folder.
2. Accept `required`, `minDate`, and `maxDate` inputs.
3. Use signals to track the selected date.
4. Validate the date against boundaries and show errors with `@if`.
5. Write Jest tests for validation and signal output.

## Best Practices
- Keep template control flow simple.
- Store SCSS and tests with the component.
- Follow conventions in [AGENTS.md](../../../AGENTS.md).
