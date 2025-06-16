# Frontend Task: Single Choice Component

Create the radio button list control based on the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Present predefined options where only one may be selected.
- Optionally allow manual answer entry with length validation.
- Emit selected value via `model()` using signals.

## Tasks
1. Generate `single-choice` component in its own folder.
2. Accept option list, `required` flag, and manual entry settings as inputs.
3. Track the chosen option and manual text through signals.
4. Validate the manual entry length and enforce selection when required, showing errors with `@if`.
5. Provide Jest tests verifying selection logic and validations.

## Best Practices
- Avoid inline logic in templates; use `@if` and `@switch` for control flow.
- Group component, template, styles, and tests together.
- Follow [AGENTS.md](../../../AGENTS.md) standards.
