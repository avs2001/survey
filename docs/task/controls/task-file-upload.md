# Frontend Task: File Upload Component

Build the file upload control as outlined in the [SRS](../../srs.md) and [User Needs](../../user-needs.md).

## Goals
- Accept files while enforcing type and size restrictions.
- Present a list of selected files.
- Provide state through `model()` using signals.

## Tasks
1. Generate `file-upload` component in its own folder.
2. Configure accepted file types, maximum size, and `required` flag.
3. Use signals to store selected files and validation results.
4. Display errors and file list using `@if` blocks only.
5. Add Jest tests covering file restrictions and emitted state.

## Best Practices
- Keep template logic minimal.
- Include SCSS and tests alongside the component files.
- Adhere to [AGENTS.md](../../../AGENTS.md) guidelines.
