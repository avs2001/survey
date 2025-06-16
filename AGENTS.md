# AGENTS.md

> Standards and responsibilities for AI-powered agents in the **Sephora Accelerate Program** using **Angular 20**, Signals-first architecture, and AI development agents powered by Codex.

---

## Purpose

This document outlines a standardized framework for **AI-powered development agents** that assist in building and maintaining Angular 20 applications for the **Sephora Accelerate Program**.  
Agents are responsible for both **developer support** (code generation/refactor) and **end-user experiences** (smart UI components powered by AI).

---

## Technology Stack

| Layer              | Stack                                               |
|-------------------|-----------------------------------------------------|
| Framework          | Angular 20                                          |
| Language           | TypeScript, SCSS, HTML                              |
| Architecture       | Standalone components, feature-first, Signals-first |
| State              | Signals (`signal`, `computed`, `effect`, `model`)   |
| Async              | `resource()` with fallback UX                       |
| Component Strategy | Control Flow, `@defer`, `@if`, `@switch`            |
| Tooling            | Angular CLI, ESLint, Prettier, Codex                |
| Testing            | Karma for unit tests           |

---

## Agent Responsibilities

### 🧠 Developer Agents (via Codex)

Codex agents must:

- Use docs/llms-full.txt as the primary style guide.
- Generate new standalone components with proper selector, Signals, `model()`, and typed inputs/outputs.
- Use `inject()` for DI.
- Scaffold new features inside `@kebormed/kit` using our layered folder structure.
- Wrap async logic with `resource()` and control rendering via `@defer`, `@loading`, and `@placeholder`.
- Automatically add meaningful unit tests using Jest (inputs/outputs, computed signals, resource flows).
- Ensure accessibility and test coverage.
- Avoid legacy patterns (no `ngModule`, no `rxjs` unless required).
- Use control flow directives  for rendering logic, no complex inline logic in templates.

**Required Output for Every Agent Task:**

- ✅ Component (standalone, signals-based)
- ✅ Template (control flow only, no complex inline logic)
- ✅ SCSS with component-specific styling
- ✅ Karma unit test
- ✅ If UI: add preview story or example usage

---


## Folder & Naming Conventions

> Always follow kebab-case naming and place signals, templates, styles, and tests in same folder.

---

## Code Quality Checklist ✅

| Category     | Criteria                                                |
|--------------|---------------------------------------------------------|
| ✅ Signals   | `signal`, `computed`, `model`, `resource` used properly |
| ✅ Template  | Control flow only – no logic in bindings                     |
| ✅ Inputs    | Strong typing, proper defaults, `readonly` where needed |
| ✅ Styles    | Localized SCSS, use Tailwind when needed                |
| ✅ Tests     | Jest unit test for all logic paths                      |
| ✅ A11y      | Screen reader tags, keyboard nav, ARIA roles            |
| ✅ Perf      | Use `NgOptimizedImage`, lazy load agents                |
| ✅ Trace     | "AI generated" disclosure for UX agents                 |

---
