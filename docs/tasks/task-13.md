Task Title: Configure Application Routing and Navigation
Description: Set up the Angular router and navigation elements so users can move between pages.
Include:
- Define routes for login, signup, list overview, list detail and notification settings. Use lazy loading for feature modules where possible and redirect empty path to the list overview.
- Create an `AuthGuard` that checks `AuthService.currentUser` and redirects unauthenticated users to `/login`.
- Update `AppShellComponent` to display a navigation bar with router links. Provide a collapsible menu for small screens and keyboard accessible controls.
- Expose an `activeRoute` signal for components that need the current route and use it in the header for contextual titles.
- Provide unit tests for the guard logic, integration tests verifying that feature modules are lazily loaded and navigation works offline, and UI tests ensuring the menu is operable with keyboard and screen readers.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Standalone components and signals for state; avoid `ngClass`/`ngStyle`.
- Navigation actions must complete within 1 second.
Dependencies: task-01, task-02
Estimated Effort: 1.5 days

