# Frontend Task: Multiple Choice Component

Implement the checkbox list control as described in the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Allow multiple selections from predefined options.
- Support optional manual answer entry with its own length validation.
- Enforce a minimum number of selections when configured.
- Expose state via `model()` using signals.

## Tasks
1. Generate `multiple-choice` component in a dedicated folder.
2. Accept inputs for the list of options, `required`, `minSelections`, and manual entry settings.
3. Track selected options and manual text value through signals.
4. Validate selection count and manual entry length, showing errors with `@if`.
5. Emit a combined value model via `model()`.
6. Add Karma tests covering selection logic and validation rules.

## Best Practices
- Keep the template readable and free of complex logic.
- Place component, template, styles, and tests together.
- Follow the guidelines in [AGENTS.md](../../../AGENTS.md).
