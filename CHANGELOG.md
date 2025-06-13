# Sephora Accelerate Questionnaire Project

All notable changes to this project will be documented in this file. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Placeholder for upcoming changes.

## [1.1.0] - 2025-06-14
### Added
- **QuestionnaireEditorComponent** initial version.
- Support for `multiple_choice` questions with manual entry.
- **DependencyEditorComponent** for show/hide logic between questions.

### Changed
- Updated `QuestionnaireService` to include `publish` and `unpublish` methods.

### Fixed
- Bug where date questions did not validate `maxDate`.

### Removed
- Deprecated file types from the `file_upload` question type.

## [1.0.1] - 2025-06-13
### Fixed
- Corrected question order after rearranging items in the editor.
- Resolved styling issues on mobile for the applicant portal.

### Changed
- Improved file upload handling for the `accept` attribute.

## [1.0.0] - 2025-06-12
### Added
- Initial Angular 20 project setup with **@kebormed/core** components.
- **QuestionRendererComponent** to display various question types.
- **QuestionnaireViewerComponent** for applicants to complete questionnaires.
- **QuestionEditorComponent** for administrators to create and edit questions.
- Base data models for `Questionnaire`, `Question`, and `Dependency`.

### Changed
- Base TypeScript configuration and Angular CLI settings.
