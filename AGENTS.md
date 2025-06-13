# Repository Agent Guidelines

This repository contains an Angular project. Follow these guidelines when modifying the project:

- **Coding Style**
  - Use 2-space indentation for all files.
  - TypeScript files should prefer single quotes.
  - Trim trailing whitespace and include a final newline.
  - Use signal for component internal state where appropriate.
  - Do not use ngModule use standalone components.
  - Use `onPush` change detection strategy for all components.
  - Use control flow syntax (`@if`, `@for`, `@switch`) 
  - Design reusable components as dumb components, relay on input and output properties for data flow.
  - Avoid using direct service injection in shared components; instead, use token where necessary.
  - Use CSS custom properties (`var(--my-var)`) for styling instead of hard-coded values.
  

- **Documentation**
  - Document new features or notable changes in `docs/` when appropriate.

- **Pre-commit Checks**
  - Run `npm test` to execute unit tests. If the command fails because of missing dependencies or environment issues, note this in the PR description.

- **Pull Request Notes**
  - Summarize the changes and mention test results in the PR body.

