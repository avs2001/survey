# Frontend Task Breakdown: Applicant Questionnaire

These tasks cover rendering questionnaires for applicants. They combine the data model from the [SRS](../srs.md) with the high level requirement in [task-frontend.md](./task-frontend.md).

## Goals
- Fetch questionnaires via REST and present them to applicants.
- Validate answers and support file upload and video link input.
- Submit responses back to the backend API.

## Tasks
1. **Data Retrieval**
   - Use a service with `resource()` to call `GET /questionnaires/{id}`.
   - Render loading and error states with `@defer` blocks.
2. **Dynamic Form Rendering**
   - For each question, instantiate a standalone component matching its type.
   - Use signals to track answers and computed validation status.
   - Support file uploads and manual answer options where allowed.
3. **Validation & Submission**
   - Enforce mandatory questions and constraints from the SRS.
   - Display inline error messages when validation fails.
   - Post results to `/responses` using an injectable service.
4. **Testing**
   - Unit test question components, validation logic, and successful submission.
   - Consider Playwright E2E tests for basic completion flow.

## Best Practices
- Use `NgOptimizedImage` for any images and lazy load heavy components.
- Ensure forms are keyboard accessible and use ARIA attributes.
- Keep the templates simple with `@if`, `@defer`, and `@switch` only.

