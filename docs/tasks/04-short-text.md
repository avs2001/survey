# Task: Short Text Input

Build the short text question type used throughout the Sephora Accelerate questionnaire.

## Details
- Provide a text input field for single-line answers.
- Administrators must be able to configure:
  - Label and optional placeholder.
  - Minimum and maximum allowed length.
  - Whether answering is mandatory.
- Enforce these rules in real time and on form submission.
- Display clear validation messages when limits are violated or a required field is empty.
- Integrate with the dynamic questionnaire builder so the live preview updates instantly.
- Support dependencies between questions. The control must hide or show based on upstream answers as described in `docs/user-needs.md`.
- Styling should follow the theming system from `docs/project.md` and use CSS custom properties.

## Technical Notes
- Implement a standalone Angular component named `ShortTextQuestionComponent` in `shared/components/questions`.
- Use an `@Input()` `config` object providing `label`, `placeholder`, `minLength`, `maxLength` and `required` flags.
- Define a `ShortTextQuestionConfig` interface describing the configuration fields.
- Create a `FormControl` with Angular validators for length and required status.
- Expose the control's value and validity via `@Output()` events so the builder can consume changes.
- Display validation messages inline. Styles should rely on CSS custom properties defined by the questionnaire theme.
- Component state should be managed with Angular signals where possible. Use on-push change detection.
- Ensure the component supports dynamic show/hide transitions so dependencies between questions work smoothly.
- Files reside in `src/app/shared/components/questions/short-text-question.component.{ts,html,scss}` with two-space indentation and single quotes.
- Include a unit test spec under the same path to validate emitted values and validation rules.

