# Frontend Task Breakdown: Conditional Logic UI

Build the interface for defining dependencies between questions. This feature ensures questions are shown or hidden based on previous answers, as specified in the [SRS](../srs.md).

## Goals
- Allow administrators to create show/hide rules between questions.
- Apply these rules in the applicant portal when rendering questionnaires.

## Tasks
1. **Rule Model**
   - Define a TypeScript model describing a dependency (source question, value, target question, action).
   - Store rules in a signal array within the editor component.
2. **Rule Editor Component**
   - Provide a standalone component to add and remove rules.
   - Use dropdowns for selecting questions and answers; follow signals-first approach.
   - Expose the rule list via `model()` for integration with the questionnaire editor.
3. **Preview & Validation**
   - Include a simple preview of rule evaluation for current questionnaire data.
   - Validate that referenced questions exist and warn about circular dependencies.
4. **Testing**
   - Add Jest tests for rule creation and preview logic.

## Best Practices
- Use `@if` and `@switch` to display rule fields without inline expressions.
- Keep all new files in kebab-case folders with component, style, and tests colocated.
- Document public APIs for easier use by other agents.

