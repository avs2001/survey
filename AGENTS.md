
# AGENTS.md  
*Project Agent Instructions — Sephora Accelerate Questionnaire Project*

## Project Context

This project implements the **Sephora Accelerate Questionnaire Application**, consisting of two parts:

1. **Admin Portal**
    - For administrators to create and edit dynamic questionnaires.
    - Questionnaires include questions of various types and allow dependencies between questions (show/hide based on answers).
    - Questionnaires are persisted and published to be used in the Applicant Portal.

2. **Applicant Portal**
    - For applicants (brand founders) to complete questionnaires.
    - Questionnaires are rendered dynamically based on their definition and dependencies.
    - User responses are validated and submitted.

## Tech Stack

- **Framework:** Angular 20
- **Language:** TypeScript
- **UI Libraries:**  
    - `@kebormed/core` — reusable generic components (input-group, modal, confirmation, accordion, etc.)  
    - `@kebormed/kit` — app-specific components (to be used where appropriate)

- **Angular Features to Use:**  
    - Control Flow syntax (`@if`, `@for`, etc.)  
    - Signals where stateful reactive data is needed  
    - Standalone components preferred  
    - Modern Angular best practices (no deprecated patterns)  

## Key Models

**Questionnaire**
```typescript
interface Questionnaire {
  programId: string;
  version: number;
  isPublished: boolean;
  questions: Question[];
  dependencies: Dependency[];
}
```

**Question**
```typescript
interface Question {
  order: number;
  type: 'short_text' | 'long_text' | 'single_choice' | 'multiple_choice' | 'date' | 'file_upload' | 'video_link';
  label: string;
  initialVisibility: 'show' | 'hidden';
  isRequired: boolean;
  // Optional type-specific attributes
}
```

**Dependency**
```typescript
interface Dependency {
  sourceQuestionOrder: number;
  sourceAnswerOptionLabel: string;
  targetQuestionOrder: number;
  action: 'show' | 'hide';
}
```

## Components to Generate

### Admin Portal

- `QuestionnaireEditorComponent`  
    - Editable list of questions  
    - Add/Edit/Delete questions  
    - Define dependencies  
    - Preview mode

- `QuestionEditorComponent`  
    - Form for editing a single question  
    - Dynamic form controls based on question type  

- `DependencyEditorComponent`  
    - UI to define dependencies between questions  

### Applicant Portal

- `QuestionnaireViewerComponent`  
    - Loads questionnaire dynamically  
    - Renders question controls based on type  
    - Handles show/hide dependencies live  
    - Submits responses  

- `QuestionRendererComponent`  
    - Renders individual question based on type  
    - Input validation  

## Services

- `QuestionnaireService`  
    - Load/save questionnaire (simulate API)  
    - Publish/unpublish questionnaire  

- `ResponseService`  
    - Submit applicant responses  

## Important Guidelines for Agents

✅ Always use Angular 20 syntax/features  
✅ Use `@kebormed/core` components where possible  
✅ Keep UI components standalone and reusable  
✅ Implement full dynamic behavior:
    - Question types support all defined properties  
    - Dependencies respected in runtime  
✅ Do not hardcode questionnaires in UI — always use data-driven rendering  

---

If you generate Angular components or services, make sure to follow these rules to ensure consistency with this project’s architecture.

---

### Example agent prompt

When generating components, you can use this example:
```
Generate an Angular 20 standalone component that renders a questionnaire based on the provided Questionnaire model. The component must:
- Dynamically render questions of all supported types
- Handle show/hide logic based on dependencies at runtime
- Use @kebormed/core components where applicable
- Use modern Angular features (signals, control flow)
```
