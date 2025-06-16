# Backend Tasks

| Title | Description | Priority | Type | Acceptance Criteria |
|-------|-------------|----------|------|---------------------|
|REST API Skeleton|Create Express or NestJS server exposing `/questionnaires` and `/responses` endpoints.|High|Feature|Server starts and responds to GET `/questionnaires` with empty list.|
|Data Models & Storage|Implement in-memory data models for Questionnaire, Question, Option, Response, and Answer. Add simple file upload storage.|High|Feature|Data persists during runtime and file uploads are saved to a local folder.|
|CRUD Operations|Implement create, read, update, delete operations for questionnaires with validation.|High|Feature|API returns appropriate status codes and validation errors.|
|Response Submission|Add endpoint to record applicant responses with dependency logic enforced.|Medium|Feature|POST `/responses` stores answers when valid and rejects incomplete submissions.|
|Simple Validation Layer|Verify required questions, constraints, and file types on submission.|Medium|Chore|Invalid data returns HTTP 400 with explanation.|
