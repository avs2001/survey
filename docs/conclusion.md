# Questionnaire Architecture Approach

This repository describes a dynamic survey system. Administrators can define questions, dependencies and input types at runtime. Applicants see a questionnaire that adapts to their answers. Custom controls share a common interface using `ControlValueAccessor` and signals.

## Reactive Forms

### Pros
- Works well with dynamic structures because form controls can be created programmatically.
- Centralizes validation rules which suits dependencies between questions.
- Integrates with the shared `SurveyControl` interface and `OnPush` components.

### Cons
- Requires more boilerplate to set up form groups and controls.
- Less template-centric, which may be harder for purely declarative layouts.
- Complex to manage fully dynamic forms where questions appear or disappear at runtime.
- Manual synchronization needed between `FormGroup` state and visibility signals.
- Forces each custom component to be form-control aware, leading to tight coupling.

Overall, reactive forms are not a great fit for a fully dynamic questionnaire with many dependencies.

## Template-Driven Forms

### Pros
- Simple syntax for basic, static forms with minimal code.
- Template-focused approach can be straightforward for designers.

### Cons
- Hard to add or remove controls dynamically at runtime.
- Complex validation logic becomes scattered across templates.
- Testing reusable standalone controls is more difficult.

## Recommendation

Because the questionnaire must add and remove questions at runtime, using a single `FormGroup` quickly becomes hard to maintain. Template-driven forms or a lightweight signal-based approach allow each control to manage its own value through `ControlValueAccessor` without manual synchronization. For this project we favor a template-driven strategy combined with signals rather than a strict reactive forms setup.
