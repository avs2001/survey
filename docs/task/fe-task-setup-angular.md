# Frontend Task Breakdown: Setup Angular Projects

This guide expands the high level **Setup Angular Projects** item from [task-frontend.md](./task-frontend.md). It aligns with the [SRS](../srs.md) and [Architecture](../architecture.md).

## Goals
- Bootstrap two Angular 20 applications: **Admin Portal** and **Applicant Portal**.
- Ensure the workspace uses standalone components and a signals-first structure.
- Provide linting/formatting via ESLint and Prettier.

## Tasks
1. **Initialize Angular Workspace**
   - Use `ng new` with Angular 20.
   - Enable standalone APIs (`--standalone` flag) and SCSS styling.
   - Configure default prefix and paths.
2. **Create Portals**
   - Generate separate projects for `admin` and `applicant` using `ng generate application`.
   - Confirm both compile using `ng serve` with placeholder routes.
3. **Shared Library**
   - Create a library for shared primitives under `@kebormed/core`.
   - Use kebab-case folders and place component, template, style, and tests together.
4. **Tooling Setup**
   - Add ESLint configuration and run `ng lint`.
   - Add Prettier configuration for consistent formatting.
   - Add simple Jest setup (replace Karma) following repository guidelines.
5. **CI Integration**
   - Ensure scripts `npm run build` and `npm test` work without prompts.
   - Prepare GitHub Actions to install dependencies, lint, build, and test.

## Best Practices
- Follow the folder and naming conventions from [AGENTS.md](../../AGENTS.md).
- Keep all new components standalone and signals-based.
- Commit with conventional messages and keep tasks small.

