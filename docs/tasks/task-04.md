Task Title: Build List Overview Page with Add List Functionality
Description: Implement the page that lists all shopping lists and allows users to create new ones.
Include:
- Create `ListOverviewPage` as a standalone component with `changeDetection` set to `OnPush`.
- Render lists from `ListService.lists` using `@for` in the template and reuse `ListPreviewTileComponent` for each list.
- Add router links from each list entry to `ListDetailPage` using the Angular router.
- Integrate `AddListButtonComponent` emitting an event via `output()` that triggers `ListService.addList`.
- Display an offline banner using `ConnectionStatusService` and include aria labels for screen readers.
- Apply responsive flexbox layout so lists wrap on narrow screens and ensure keyboard navigation for all interactive elements.
- Provide unit tests for AddListButtonComponent and page logic, integration tests covering list creation flow, and UI tests at mobile and desktop breakpoints.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 in strict mode.
- Use signals for state, standalone components and modern control flow (`@if`, `@for`).
- Avoid `ngClass` and `ngStyle`; prefer `class` and `style` bindings.
- Page load should be under 1 second and list creation responses under 1 second.
Dependencies: task-03, task-13
Estimated Effort: 2 days
