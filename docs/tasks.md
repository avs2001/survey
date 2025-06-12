# Project Setup Checklist

## Environment Setup
- [ ] **T01** Install Node.js and Angular CLI v20.
- [ ] **T02** Initialize a new Angular workspace using `ng new`.
- [ ] **T03** Configure `core` and `shared` directories as described in `project.md`.

## Admin Interface Features
- [ ] **T04** Build drag-and-drop form builder UI with reorder controls.
- [ ] **T05** Implement real-time preview for desktop and mobile.
- [ ] **T06** Provide validation rules configuration (required fields, file type/size limits).
- [ ] **T07** Allow forms to be saved as draft and published when ready.
- [ ] **T08** Add role-based access control for admin and viewer users.

## Question Types
- [ ] **T09** Support text input (short and long).
- [ ] **T10** Implement radio buttons, checkboxes and dropdowns.
- [ ] **T11** Add date selector component.
- [ ] **T12** Enable file uploads with size and type restrictions.
- [ ] **T13** Provide video uploads or link validation.

## Response Options & Field Settings
- [ ] **T14** Allow predefined answers for dropdowns, radio buttons and checkboxes.
- [ ] **T15** Support open-ended responses for text and file uploads.
- [ ] **T16** Add required/optional toggle per field.
- [ ] **T17** Enforce character or word limits on text inputs.

## Conditional Logic
- [ ] **T18** Show or hide questions dynamically based on previous answers.
- [ ] **T19** Block navigation until required answers are provided.

## Styling & Layout
- [ ] **T20** Implement responsive design for mobile, tablet and desktop.
- [ ] **T21** Enable admin-customizable section headers and instructions.
- [ ] **T22** Allow basic styling options (colors, typography) per section.

## Technical Practices
- [ ] **T23** Use standalone Angular components with on-push change detection.
- [ ] **T24** Manage component state with signals where appropriate.
- [ ] **T25** Style components using CSS custom properties instead of hard-coded values.
- [ ] **T26** Write unit tests for components and services. Include e2e tests for key flows.


## Future Enhancements (Optional)
- [ ] **T27** Add analytics dashboard for form responses.
- [ ] **T28** Implement versioning for forms.
- [ ] **T29** Provide pre-built templates for common form types.
- [ ] **T30** Introduce multilingual form support.
