# AI-Driven Software Development Process

Standard procedure for using **ChatGPT** and AI tools in a small team software project.

Starting point: **User Needs**\
Team: **1-2 people + AI assist**

---

# 🔹 Overall Flow

```
User Needs → GPT: Refined User Needs → GPT: User Stories → GPT: PRD → GPT: SRS → GPT: Architecture → GPT: Tasks → FE Development → BE Development → Testing → CI/CD → Deploy → Feedback → Iterate
```

---

# 📌 Step 0: From User Needs to Ready for Development

Before any development work begins, you must transform raw **User Needs** into actionable technical design. This includes:

## Step 0.1: Refine User Needs

**Prompt:**

```text
Here is a list of user needs (paste). Please refine and group them by:
- User persona
- Pain points
- Desired outcomes
```

**Deliverable:** `docs/user-needs.md`

---

## Step 0.2: Generate User Stories

**Prompt:**

```text
Based on this list of user needs (paste), generate clear User Stories in the format:
"As a <persona>, I want to <do something>, so that <goal>."
```

**Deliverable:** `docs/user-stories.md`

---

## Step 0.3: Create Product Requirements Document (PRD)

**Prompt:**

```text
Based on these user stories (paste), generate a PRD including:
- Executive summary
- Personas
- User stories
- Feature list
- Out of scope features
```

**Deliverable:** `docs/PRD.md`

---

## Step 0.4: Generate Software Requirements Specification (SRS)

**Prompt:**

```text
Based on this PRD (paste), generate a Software Requirements Specification (SRS) including:
- Functional requirements
- Non-functional requirements
- Data model overview (Mermaid diagram if possible)
- API endpoints (OpenAPI spec draft)
```

**Deliverable:** `docs/SRS.md`

---

## Step 0.5: Generate Architecture & Diagrams

**Prompt:**

```text
Based on this SRS (paste), generate system architecture description and diagram (Mermaid format).
Include frontend, backend, and integration points.
```

**Deliverables:**

- `docs/architecture.md`
- `docs/architecture-diagram.mmd`

---

## Step 0.6: Break Down into Tasks

**Prompt:**

```text
Based on this SRS and architecture (paste), break the work into actionable tasks by:
- Frontend
- Backend
- Testing
- DevOps
Include: task title, description, priority, and type.
```

**Deliverable:** `docs/tasks.md` or GitHub Issues

---

✅ Once these are in place, proceed to development using the Frontend, Backend, and Deployment sections below.

---

# 🔧 Frontend Development Process (Angular 20 + Signals)

## Step 1: Identify UI Screens and Components

**Prompt:**

```text
Based on this PRD and SRS (paste), list all required UI screens (pages) and their components.
Group them as:
- Page Name
- Purpose
- Required subcomponents
```

**Deliverable:** `docs/frontend-ui-map.md`

## Step 2: Generate Component Tree and File Structure

**Prompt:**

```text
Based on the list of screens and components (paste), generate a file/folder structure for Angular 20 using signals.
Include suggestions for:
- Pages
- Components
- Shared modules
- Feature modules
```

**Deliverable:** Folder layout in `/src/app/`

---

## Step 3: Scaffold First Feature (e.g., Login Page)

**Prompt:**

```text
Generate Angular 20 + Signals code for a Login Page with:
- Email/password fields
- Signal-based form state
- Submit button with validation
- Error handling signal
- Mock AuthService
```

**Deliverables:** `login.page.ts`, `login.page.html`, service & SCSS files

---

## Step 4: Style the Page (SCSS or Tailwind)

**Prompt:**

```text
Generate SCSS (or Tailwind classes) to style this page responsively.
Ensure proper spacing, alignment, and form layout.
```

**Deliverable:** `login.page.scss`

---

## Step 5: Add Tests

**Prompt:**

```text
Generate unit tests for LoginPage using Angular TestBed and Jest:
- Initial render
- Validation rules
- Submit behavior
- Error handling
```

**Deliverable:** `login.page.spec.ts`

---

## Step 6: Repeat for Next Feature

- Choose next priority feature (e.g., Dashboard, Signup)
- Repeat steps 1–5 per screen/component
- Use shared modules for UI elements like `Button`, `InputGroup`, `Modal`

---

## Step 7: Integrate API Connections (Optional for Later)

**Prompt:**

```text
Add Angular service integration to real API.
Replace mock AuthService with HttpClient-based POST.
Handle error response with signal.
```

---

## Step 8: Push & Track

- Commit work with meaningful messages
- Track features with GitHub Issues, Linear, or a `docs/fe-tracking.md`
- Ask ChatGPT for refactoring or optimization

---

# 🔧 Backend Development Process

## Step 1: Identify Backend Services

**Prompt:**

```text
Based on the SRS and architecture, list all required backend services and responsibilities.
Group them as:
- Service Name
- Core logic or endpoint(s)
- Data models
```

**Deliverable:** `docs/backend-services.md`

---

## Step 2: Define Data Models and Schemas

**Prompt:**

```text
Based on SRS and feature requirements, define all data models.
Use TypeScript or JSON Schema notation.
```

**Deliverable:** `models/` folder or Prisma schema, if applicable

---

## Step 3: Scaffold REST or GraphQL API

**Prompt:**

```text
Generate REST (or GraphQL) endpoints for each backend service.
Include validation, error handling, and example responses.
Use Express/NestJS/Fastify as needed.
```

**Deliverable:** Source code for backend feature

---

## Step 4: Connect to Data Store

**Prompt:**

```text
Generate database access layer for these models using ORM (Prisma/TypeORM/etc).
Include CRUD methods and relationships.
```

---

## Step 5: Write Backend Unit Tests

**Prompt:**

```text
Generate unit tests for backend services and controllers.
Use Jest/Mocha with mocks for external dependencies.
```

**Deliverable:** `/tests/backend/`

---

# 🚀 Deployment Process

## Step 1: Define Deployment Targets

**Prompt:**

```text
Suggest cloud-friendly deployment targets for this app (e.g., Vercel, Render, Fly.io, Cloud Run).
List pros/cons for small team.
```

**Deliverable:** Chosen target + `docs/deploy-strategy.md`

---

## Step 2: Generate CI/CD Pipeline

**Prompt:**

```text
Generate GitHub Actions (or GitLab) config that:
- Runs tests
- Builds frontend and backend
- Deploys to target
- Sends notification on failure
```

**Deliverable:** `.github/workflows/deploy.yml`

---

## Step 3: Monitor and Auto-Redeploy

**Prompt:**

```text
Suggest tools and config to enable logs, error tracking, and auto-rollback (e.g., Sentry, LogRocket, Vercel Analytics).
```

---

Now you're ready to develop, test, deploy, and iterate across **Frontend**, **Backend**, and **Deployment** pipelines — all supported by AI.

Let’s build! 🚀

