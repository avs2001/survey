# Product Requirements Document (PRD)

## Executive Summary

The Sephora Accelerate Questionnaire project provides a self-service interface for administrators to create dynamic questionnaires and a companion portal for applicants to complete them. The goal is to streamline data collection for the Sephora Accelerate Program through configurable question types, dependencies, and validation rules.

## Personas

- **Administrator** – Manages questionnaires used to gather information from applicants. Responsible for defining questions, dependencies, and validation constraints.
- **Applicant** – Completes the published questionnaires in order to provide required information to Sephora.

## User Stories

- As an **administrator**, I want to create and edit questionnaires with multiple questions, so that I can collect the information needed from applicants.
- As an **administrator**, I want to specify whether each question is mandatory or optional, so that the system enforces required responses.
- As an **administrator**, I want to define dependencies between questions to show or hide them based on selected answers, so that the questionnaire adapts to user input.
- As an **administrator**, I want to choose an input control type (short text, long text, multiple choice, single choice, date input, file upload, or video link) for each question, so that the question uses the most appropriate format.
- As an **administrator**, I want to configure each input control with constraints such as length limits, minimum selections, manual entry rules, file types, and file size, so that responses remain valid and consistent.
- As an **administrator**, I want to allow applicants to manually enter answers in multiple choice or single choice questions, so that they can provide additional information when necessary.
- As an **applicant**, I want to complete questionnaires created by administrators, so that I can provide the requested information.

## Feature List

1. **Questionnaire Management**
   - Create, edit, and delete questionnaires.
   - Support multiple questions per questionnaire.
2. **Mandatory and Optional Questions**
   - Mark questions as required or optional.
   - Enforce completion of mandatory questions during submission.
3. **Conditional Logic**
   - Define dependencies to show or hide questions based on answers.
4. **Input Control Types**
   - Short text, long text, multiple choice, single choice, date input, file upload, and video link.
5. **Validation and Constraints**
   - Configure length limits, minimum selections, and file restrictions.
6. **Manual Answer Entry**
   - Allow applicants to provide custom answers in choice questions when enabled.
7. **Applicant Questionnaire Completion**
   - Display questionnaires dynamically with dependencies applied.
   - Validate inputs and submit responses.

## Out-of-Scope Items

- Multi-language support for questionnaires.
- User authentication and account management.
- Backend integration or data persistence beyond storing responses.
- Analytics or reporting on questionnaire usage.

