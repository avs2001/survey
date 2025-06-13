# AGENTS.md

> Defining standards, responsibilities, and quality guidelines for AI-powered agents contributing to the Angular development environment.

---

## Purpose

This document defines a structured environment for **AI-powered agents** supporting the development of modern Angular applications.  
Agents operate with awareness of Angular architecture, tooling, and best practices to:

- generate, refactor, and optimize code
- enhance UX with AI-driven components
- maintain code quality and consistency
- ensure accessibility, performance, and scalability
- evolve the application to leverage modern Angular features

---

## Environment

- **Framework:** Angular (latest version; follow [Angular coding style guide](https://angular.io/guide/styleguide))
- **Language:** TypeScript, HTML, SCSS
- **Tooling:** Angular CLI, Angular Language Service, Signals API, Control Flow
- **State management:** Signals (`signal`, `computed`, `linkedSignal`, `resource`), minimal external state libraries
- **Data handling:** Leverage `resource` for async flows; ensure reactive patterns in templates
- **Testing:** Unit tests with Jasmine/Karma or Jest; E2E tests with Cypress or Playwright

Agents must generate code that is **Signals-first** and aligned with **Component-first** Angular architecture.

---

## Agent Responsibilities

### 1️⃣ General

- Follow the Angular coding style guide for:
  - Naming (hyphen-separated file names)
  - Structure (one concept per file)
  - Consistency (match file name with class names)
- Organize code in **feature-based directories**.
- Use Signals and Control Flow as primary reactivity model.
- Prefer `inject()` over constructor parameter injection.
- Write **unit tests** when generating components/services/directives.
- Use `@defer` blocks and `@loading`/`@placeholder` to optimize resource loading.

---

### 2️⃣ Components

- Build components that are:
  - **Composable**
  - **Encapsulated**
  - **Focused on UI**
- Use `ng-content` for content projection.
- Implement selectors using hyphen-case with feature-specific prefix (e.g. `app-profile-photo`).
- Follow style guidelines:
  - Prefer `ViewEncapsulation.Emulated` (default).
  - Use `class`/`style` bindings over `ngClass`/`ngStyle`.
  - Avoid overly complex logic in templates (prefer `computed`).

---

### 3️⃣ Directives

- Assist in building:
  - Structural directives (e.g. `@if`, `@for`, `@switch`).
  - Attribute directives for reusable behaviors.
- Ensure directives are compatible with standalone components and Composition API.

---

### 4️⃣ Dependency Injection

- Use `providedIn: 'root'` for globally shared services.
- Use `inject()` in components and services.
- Follow advanced patterns where appropriate:
  - `useFactory`, `useValue`, `InjectionToken`.
- Use **hierarchical injectors** for feature isolation where needed.

---

### 5️⃣ AI-Specific Patterns

- AI-generated components must include **metadata for traceability**.
- For AI-powered UX (chatbots, smart forms, etc.):
  - Follow performance and accessibility best practices.
  - Optimize initial load with `@defer` and prefetch triggers.
- For AI-driven code generation:
  - Prefer **Signals-first** patterns.
  - Avoid legacy RxJS unless explicitly required.

---

### 6️⃣ Performance Optimization

- Use `NgOptimizedImage` for all images:
  - Ensure width/height specified.
  - Add proper `srcset` and `sizes`.
  - Use `placeholder` with blurred loading.
- Use `@defer` blocks for:
  - Lazy loading heavy components.
  - Data that is not immediately needed.
- Implement `prefetch` triggers where appropriate.

---

### 7️⃣ Testing

- Always generate unit tests for components, services, and directives.
- Use `@defer` testing utilities for deferred blocks.
- For AI-driven flows:
  - Write E2E tests covering AI interaction patterns.
  - Validate behavior across device sizes and screen readers.

---

## Agent Quality Criteria ✅

Generated code must:

✅ Compile cleanly with Angular CLI  
✅ Follow Angular coding style  
✅ Include unit tests where appropriate  
✅ Document APIs with `@param` / `@returns` where needed  
✅ Use `readonly` and `protected` properly  
✅ Avoid complex template logic (prefer `computed`)  
✅ Handle async flows with `resource` and error handling  
✅ Optimize image loading with `NgOptimizedImage`  
✅ Use `@defer` where applicable to reduce TTI and improve LCP  
✅ Ensure ARIA compliance where applicable

---

## Example Agent Tasks 🚀

### Components

- Generate a **feature module** with standalone components and Signals-based state.
- Migrate legacy component using `EventEmitter` to use `model()`.
- Implement `NgOptimizedImage` with proper `srcset` and `placeholder`.
- Add `@defer` blocks with `@loading` and `@error` fallback.
- Create an AI-powered autocomplete component with `Resource`.

### Services

- Generate a service using `providedIn: 'root'`.
- Use `resource` to encapsulate server interaction.
- Implement loading/error states using Signals.

### Testing

- Write unit tests for newly generated components and services.
- Write E2E tests for AI-powered user flows.
- Test `@defer` blocks with proper state transitions.

---

## Future Enhancements

✅ Integrate Signals patterns into existing components  
✅ Optimize bundle size with deferred loading  
✅ Ensure Lighthouse Core Web Vitals pass for AI-driven UIs  
✅ Build a library of **AI UX components** (chatbot, Q&A, autocomplete, summarizer, agent dashboard)  
✅ Provide AI agents with automatic `AGENTS.md` validation logic

---

## References

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular Signals](https://angular.io/guide/signals)
- [Component Architecture Best Practices](https://angular.io/guide/component-styles)
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [NgOptimizedImage](https://angular.io/guide/image-optimization)
- [@defer and Async Reactivity](https://angular.io/guide/defer)
- [Component Testing Guide](https://angular.io/guide/testing-components-overview)

---

