# Frontend Tasks

| Title | Description | Priority | Type | Acceptance Criteria |
|-------|-------------|----------|------|---------------------|
|Setup Angular Projects|Create Admin Portal and Applicant Portal projects using Angular 20 standalone components.|High|Feature|Both portals compile and run via `ng serve` with placeholder pages.|
|Questionnaire Editor|Implement UI to create, edit, delete questionnaires and questions with all supported input types.|High|Feature|Admins can manage questionnaires and questions. Saved data is sent to the backend via REST API.|
|Conditional Logic UI|Provide interface for defining dependencies between questions.|Medium|Feature|Admins can configure show/hide rules based on answers and the applicant portal respects them.|
|Applicant Questionnaire|Render questionnaires for applicants with validation, file upload support, and video link input.|High|Feature|Applicants can submit valid responses and receive error messages for invalid entries.|
|Responsive & Accessible Design|Ensure both portals work on desktop and mobile with ARIA labels and keyboard navigation.|Medium|Chore|Pages pass basic accessibility checks and adapt to small screens.|
