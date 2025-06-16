# Frontend Task Breakdown: Questionnaire Editor

Detailed tasks for implementing the administration interface based on the [SRS](../srs.md) requirements.

## Goals
- Allow administrators to create, edit, and delete questionnaires and questions.
- Support all input types described in the SRS.
- Send data changes to the REST API.

## Tasks
1. **Questionnaire List Page**
   - Display existing questionnaires with options to create, edit, or delete.
   - Retrieve data using a service wrapped in `resource()` and show loading states with `@defer`.
2. **Questionnaire Form**
   - Build a standalone component with signals for form state.
   - Provide fields for title and description.
   - Use typed models and reactive forms.
3. **Question Management**
   - Allow adding multiple questions, each configured with type, required flag, and constraints.
   - Componentize each question input type (short text, long text, multiple choice, etc.).
   - Use `model()` to expose state and `inject()` for dependencies.
4. **Persistence**
   - Call backend endpoints (`/questionnaires` and `/questionnaires/{id}`) on save/update.
   - Handle success and error notifications via signals.
5. **Testing**
   - Write Jest unit tests for form logic and API interactions.
   - Verify computed signals and error handling.

## Best Practices
- Keep templates free of inline logic; rely on `@if` and `@switch` for control flow.
- Store SCSS per component and follow the naming convention from [AGENTS.md](../../AGENTS.md).
- Ensure ARIA labels and keyboard navigation for all form controls.

