# System Architecture for Sephora Accelerate Questionnaire Platform

## Overview

The Sephora Accelerate Questionnaire Platform is a web-based application with two main parts:

- **Administrator Console** – for Program Administrators to create and manage questionnaires.
- **Applicant Portal** – for Applicants to submit their applications.

The system is designed as a modular, scalable architecture using a modern frontend + backend stack, connected to a secure database. It will also provide APIs for future extensibility.

## High-Level Architecture

- **Frontend (Web UI)**
  - Admin Console (Questionnaire Builder, Preview, Version Control)
  - Applicant Portal (Application Form, Progress Tracker)

- **Backend Services**
  - Questionnaire Management Service
  - Application Submission Service
  - Dependency Evaluation Engine
  - Validation Engine
  - Version Control & Publishing Workflow
  - User Authentication & Authorization Service

- **Database**
  - Program & Questionnaire Data
  - Applicant Applications & Answers
  - Audit Logs & Version History

- **Storage**
  - File Upload Storage (S3-compatible bucket or equivalent)

- **External Services**
  - Email Service (Notifications to Applicants/Admins — if needed in future)
  - Video Link Validation Service (basic URL validation)

## Main Components / Services to Implement

### 1️⃣ Frontend (Web UI)

#### Administrator Console
- Dynamic Questionnaire Builder (drag-and-drop UI)
- Validation Rule Editor
- Dependency Rule Editor
- Preview Mode
- Version Management Panel

#### Applicant Portal
- Responsive Multi-step Form
- Dynamic Question Visibility (real-time show/hide)
- Progress Tracking UI
- Validation Feedback
- File Upload Interface
- Save & Resume Drafts

### 2️⃣ Backend Services

#### Questionnaire Management Service
- CRUD APIs for Programs & Questionnaires
- Dependency & Validation Metadata

#### Application Submission Service
- APIs for application creation, update (save draft), submit
- Validation & Consistency Enforcement

#### Dependency Evaluation Engine
- Engine to evaluate show/hide logic based on applicant responses

#### Validation Engine
- Enforces all field-level validations (length, format, required fields, file types, date ranges, etc)

#### Version Control & Publishing Workflow
- Stores and manages draft vs published versions
- Supports safe updates to questionnaires

#### User Authentication & Authorization Service
- Role-based access (Admins vs Applicants)
- OAuth2 / JWT for secure sessions

### 3️⃣ Database
- PostgreSQL or similar RDBMS based on provided ER diagram.
- Audit trails for changes to questionnaires.

### 4️⃣ Storage
- File uploads stored in a dedicated storage service with appropriate security.
- Metadata stored in the database.

### 5️⃣ External Services (Optional / Future)
- Email notifications.
- Advanced video validation.

## Technology Recommendations (optional)
- Frontend: React / Angular / Vue.js
- Backend: Node.js (Express, NestJS), or Python (FastAPI, Django)
- Database: PostgreSQL
- Storage: AWS S3 / GCP Storage
- API: REST with OpenAPI Spec.