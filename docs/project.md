
# User Needs & Key Capabilities Specification

_This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1._

---

## 🎛️ Admin Interface

### Core Features
- **Drag-and-Drop Form Builder UI**
  - Support drag-and-drop OR arrow-based controls for reordering form elements.

- **Real-time Preview**
  - **Desktop preview**
  - **Mobile preview**
  - Instant reflection of changes while building the form.

- **Validation Rules Setup**
  - Define mandatory fields.
  - Configure file format restrictions.
  - Set file size limits.

- **Save as Draft / Publish**
  - Ability to save forms in a draft state.
  - Ability to publish finalized forms.

- **Role-based Access**
  - Admin users: Full access to create, edit, and publish forms.
  - Viewer users: Read-only access to published forms and drafts.

---

## 📝 Question Types & Response Options

### Supported Question Types
- **Text Input**
  - Short text
  - Long text

- **Radio Buttons**

- **Checkboxes**

- **Dropdowns**

- **Date Selectors**

- **File Uploads**
  - File size limits
  - File type restrictions

- **Video Upload / Link Validation**
  - Upload video files.
  - Provide external video links with format validation.

---

### Response Options & Field Settings
- Predefined answers:
  - For dropdowns, radio buttons, checkboxes.

- Open-ended responses:
  - Text
  - File upload

- **Required / Optional Toggle** per field.

- **Character / Word Limits** on text input fields.

---

## 🔀 Conditional Logic

- **Dynamic Field Display**
  - Show/hide questions based on answers to previous questions.
  - Example: _“If 'Yes', display next section.”_

- **Answer-based Navigation**
  - Block progression until certain required answers are provided.
  - Example: _“Must enter SKU before proceeding to the next step.”_

---

## 🎨 Styling & Layout

- **Responsive Design**
  - Optimized layouts for mobile, tablet, and desktop.

- **Admin-Customizable UI**
  - Custom section headers.
  - Configurable help text and instructions.
  - Optional styling options per section (basic colors, typography choices).

---

## ✅ Summary of Priorities

| Priority | Feature |
|----------|---------|
| High     | Drag-and-drop / reorder UI |
| High     | Real-time preview |
| High     | Validation rule configuration |
| High     | Save as Draft / Publish flow |
| High     | Role-based access control |
| High     | Full set of question types |
| High     | Conditional logic |
| Medium   | Styling and customizable UI |
| Medium   | Video link validation |
| Low      | Advanced custom CSS options (future scope) |

---

## Future Enhancements (Optional)
- Analytics dashboard for form responses.
- Support for versioning of forms.
- Pre-built templates for common form types.
- Multilingual form support.

---



# Technical Aspects — Angular 20 Project

## 📁 Project Structure

### `core`
Contains the core infrastructure of the application. These services and layouts should be highly stable and used across the entire app.

- `services` — singleton services (provided in root or feature scope) such as:
  - API clients
  - State management (if app-wide or domain-wide)
  - Configuration loaders
  - Auth services
  - Logging, Analytics

- `layout` — global layout elements:
  - Main app shell components (sidebar, header, footer)
  - Layout wrappers (responsive grids, flex layouts)
  - Route-level layout definitions

### `shared`
Contains reusable building blocks and utilities used across multiple features.

- `components` — *dumb / presentational* components:
  - Must have **strongly typed `@Input()` / `@Output()` interfaces**
  - No internal API calls or business logic
  - No service injection (except for UI services, e.g. i18n, theming)
  - Must be designed for maximum reuse and isolation

- `pipes`, `directives`, and other shared utilities:
  - Pure pipes for formatting and transformation
  - Structural and attribute directives
  - Utility classes, constants, and helpers

## 🎨 Code Styles and Architecture

### Components
- Must be **standalone** (`standalone: true`)
- Must follow **on-push change detection** (default with standalone in Angular 17+)
- If using **internal state**, prefer:
  - Angular **`signal`** for component-local state (to avoid excessive `RxJS` boilerplate)
  - Use computed signals and effects where appropriate
  - External state (feature-wide) should live in services (preferably signals-based service or store)

### Styling
- Must use **CSS custom properties (`var(--my-var)` style)**:
  - For colors, spacing, typography, sizing
  - Ensure easy theming and design tokens
  - Components must not use hard-coded values in CSS

### General Practices
- Composition > inheritance
- Dumb components over smart components (thin smart components only in feature modules)
- Follow Angular 20 best practices:
  - `control flow syntax` (`@if`, `@for`, `@switch`)
  - Signals-based patterns where it makes sense
  - Prefer **declarative templates** with minimal imperative logic in components
- Testing:
  - Use Angular testing utilities compatible with standalone components
  - Aim for unit tests on components and services, e2e for critical flows

## 🚩 Summary Principles
- The architecture encourages:
  - **Scalability** — decoupled and reusable pieces
  - **Performance** — signal-based state and declarative UI
  - **Consistency** — enforced styles and patterns
  - **Maintainability** — strong typing, simple data flow, minimal side effects
