# Project Setup Checklist

## Environment Setup
- [ ] Install Node.js and Angular CLI v20.
- [ ] Initialize a new Angular workspace using `ng new`.
- [ ] Configure `core` and `shared` directories as described in `project.md`.

## Admin Interface Features
- [ ] Build drag-and-drop form builder UI with reorder controls.
- [ ] Implement real-time preview for desktop and mobile.
- [ ] Provide validation rules configuration (required fields, file type/size limits).
- [ ] Allow forms to be saved as draft and published when ready.
- [ ] Add role-based access control for admin and viewer users.

## Question Types
- [ ] Support text input (short and long).
- [ ] Implement radio buttons, checkboxes and dropdowns.
- [ ] Add date selector component.
- [ ] Enable file uploads with size and type restrictions.
- [ ] Provide video uploads or link validation.

## Response Options & Field Settings
- [ ] Allow predefined answers for dropdowns, radio buttons and checkboxes.
- [ ] Support open-ended responses for text and file uploads.
- [ ] Add required/optional toggle per field.
- [ ] Enforce character or word limits on text inputs.

## Conditional Logic
- [ ] Show or hide questions dynamically based on previous answers.
- [ ] Block navigation until required answers are provided.

## Styling & Layout
- [ ] Implement responsive design for mobile, tablet and desktop.
- [ ] Enable admin-customizable section headers and instructions.
- [ ] Allow basic styling options (colors, typography) per section.

## Technical Practices
- [ ] Use standalone Angular components with on-push change detection.
- [ ] Manage component state with signals where appropriate.
- [ ] Style components using CSS custom properties instead of hard-coded values.
- [ ] Write unit tests for components and services. Include e2e tests for key flows.


## Future Enhancements (Optional)
- [ ] Add analytics dashboard for form responses.
- [ ] Implement versioning for forms.
- [ ] Provide pre-built templates for common form types.
- [ ] Introduce multilingual form support.
