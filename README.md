# Sephora Accelerate Questionnaire Project

## Project Description

The Sephora Accelerate Questionnaire Project provides a complete solution for creating, managing, and completing dynamic questionnaires used by the Sephora Accelerate Program.

### Admin Portal
- Allows administrators to build and update questionnaires.
- Supports defining complex dependencies between questions.
- Publishes questionnaires for use in the Applicant Portal.

### Applicant Portal
- Enables applicants to fill out questionnaires dynamically rendered from data.
- Honors question dependencies during completion.
- Validates input and submits responses for storage.

## Technologies Used

- **Angular 20**
- **TypeScript**
- **@kebormed/core**
- **@kebormed/kit**
- **RxJS**
- **Signals**
- **Modern Angular control flow** (`@if`, `@for`)

## Project Structure

```
apps/
  admin-portal/        # Angular project for administrators
  applicant-portal/    # Angular project for applicants
libs/
  shared/              # Shared models and utilities
  ui-components/       # Optional reusable UI pieces
```

## How to Run the Project

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd survey
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run Admin Portal**
   ```bash
   npm run ng -- serve apps/admin-portal
   ```
4. **Run Applicant Portal**
   ```bash
   npm run ng -- serve apps/applicant-portal
   ```

Both applications will start on different ports as configured in `angular.json`.

## Key Components

- **QuestionnaireViewerComponent** – Displays questionnaires in the Applicant Portal.
- **QuestionRendererComponent** – Renders individual questions with validation.
- **QuestionnaireEditorComponent** – Provides an interface for editing questionnaires.
- **DependencyEditorComponent** – Lets admins manage question dependencies.
- **QuestionEditorComponent** – Form for editing a single question.

## Services

- **QuestionnaireService** – Handles loading, saving, and publishing questionnaires.
- **ResponseService** – Submits applicant responses.

## How to Contribute

1. **Branching model** – Use feature branches off `main` and submit pull requests.
2. **Code style guidelines** – Follow Angular and TypeScript best practices. Keep components standalone and leverage `@kebormed/core` components.
3. **Using signals and modern Angular features** – Prefer signals over observables for local component state and utilize control flow syntax (`@if`, `@for`).

## Testing

Unit and component tests should be placed alongside the source files using Jasmine and Karma. If a `TESTING.md` file exists, follow the guidelines described there.

To run tests:
```bash
npm test
```

## License

This project is currently released under a placeholder license.

## Future Improvements

- Support for multi-language questionnaires
- Backend integration
- User authentication
- Analytics for questionnaire usage

