# Task Delta: MultipleChoice and SingleChoice Controls

This document summarizes the tasks required to implement the **MultipleChoice** and **SingleChoice** controls in the `src/app/shared/controls` directory. It draws from the original task files in `docs/task/controls` and the commit history produced by Codex.

## MultipleChoice Component
1. **Generate Component Skeleton**
   - Create a standalone component `multiple-choice` with its own folder containing the TypeScript class, template, SCSS, and unit test files.
2. **Define Inputs**
   - `name`: group label for ARIA and input name attributes.
   - `options: string[]`: list of checkbox options.
   - `required: boolean`: whether at least one choice is needed.
   - `minSelections: number`: minimum number of choices to satisfy validation.
   - `allowManualEntry: boolean`: show manual text input when `true`.
   - `manualLabel: string`: label text for the manual input.
   - `manualMinLength` / `manualMaxLength`: text length constraints for manual entry.
3. **Track State with Signals**
   - `selectedOptions` signal holds the array of chosen options.
   - `manualValue` signal stores the manual text input.
   - Expose a `model()` signal named `value` of type `{ selections: string[]; manual: string }`.
   - Update the model via an `effect()` whenever selections or manual value change.
4. **Validation Logic**
   - Computed signal `selectionError` verifies that `required` and `minSelections` are satisfied, counting the manual entry when present.
   - Computed signal `manualError` checks `manualMinLength` and `manualMaxLength` when manual entry is allowed.
   - Generate unique IDs for ARIA error message references.
5. **Template and Styling**
   - Render a list of checkbox `<input>` elements using `@for`.
   - Display validation errors with `@if` blocks.
   - Include optional manual text input bound to `manualValue`.
   - Provide basic SCSS for layout and error styling.
6. **Component API Methods**
   - `toggle(option: string, checked: boolean)` updates `selectedOptions`.
   - `updateManual(val: string)` sets `manualValue`.
   - Helpers `isSelected`, `onToggle`, and `onManual` facilitate template interaction.
7. **Unit Tests**
   - Verify model output when selections change.
   - Test validation rules for required selections and `minSelections`.
   - Test manual entry length checks and its ability to satisfy required rules.
   - Ensure the manual label can be customized.

## SingleChoice Component
1. **Generate Component Skeleton**
   - Create a standalone component `single-choice` with separate TypeScript, template, SCSS, and spec files.
2. **Define Inputs**
   - `name`: radio group name and ARIA label.
   - `options: string[]`: list of radio button options.
   - `required: boolean`: enforce that a selection or manual entry exists.
   - `allowManualEntry: boolean`: enable optional text input.
   - `manualLabel: string`: label for the manual text field.
   - `manualMinLength` / `manualMaxLength`: length constraints for manual text.
3. **Track State with Signals**
   - `selected` signal holds the currently chosen option.
   - `manualValue` signal stores manual text.
   - Provide a `model()` signal `value` of type `{ selection: string; manual: string }` updated via `effect()`.
4. **Validation Logic**
   - `selectionError` computed signal returns "Selection required" when `required` is true and neither an option nor manual text is provided.
   - `manualError` computed signal enforces length constraints when manual entry is present.
5. **Template and Styling**
   - Render radio inputs using `@for`; use `name` input for the group.
   - Display errors with `@if` blocks and associate them with ARIA IDs.
   - Render manual input when enabled and bind it to `manualValue`.
6. **Component API Methods**
   - `select(option: string)` selects an option and clears manual text.
   - `updateManual(val: string)` sets manual text and clears the selected option.
   - Helpers `isSelected`, `onSelect`, and `onManual` support template events.
7. **Unit Tests**
   - Check that the `model()` emits the chosen option.
   - Validate required selection behavior and manual entry length rules.
   - Confirm manual entry deselects the chosen option and vice versa.
   - Ensure manual label updates correctly.

## Prompt Example
To implement these controls using Codex, the following style of prompt was used:

```
Using Angular 20 with signals and the project conventions in AGENTS.md, implement a standalone component for [MultipleChoice|SingleChoice].
Requirements:
- Accept inputs for option list, required flag, manual entry settings, and length constraints.
- Track selected option(s) and manual text using `signal()` and expose a typed model via `model()`.
- Provide computed validation errors and display them in the template with `@if`.
- Write Karma unit tests covering selection logic, manual entry, and validation rules.
Place TypeScript, HTML, SCSS, and spec files in the same folder.
```

This prompt was iteratively applied for both components, leading to the commits starting with `feat: add multiple choice control` and `feat: add single-choice control` followed by subsequent fixes and enhancements for manual input and validation.
