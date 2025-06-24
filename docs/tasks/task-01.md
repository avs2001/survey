Task Title: Setup Angular PWA Shell
Description: Bootstrap the project as an Angular 20 Progressive Web App and provide a foundation for offline-first features.
Include:
- Configure Angular CLI 20 with the `--service-worker` option and set up the Angular service worker for caching of assets and API calls.
- Implement `AppShellComponent` hosting a responsive header and navigation bar using CSS flexbox. The component must be standalone with `changeDetection` set to `OnPush`.
- Create `ConnectionStatusService` using the `navigator.onLine` property and `online`/`offline` events to expose an `online` signal.
- Display an offline banner in the header whenever `online` is false. Ensure keyboard navigation and ARIA roles for accessibility.
- Write unit tests validating `ConnectionStatusService` logic, integration tests verifying service worker caching, and UI tests confirming the offline banner behaviour on desktop and mobile viewports.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use standalone components, `inject()` for services, signals for state and the new template control flow (`@if`).
- Avoid `ngClass` and `ngStyle`; prefer `class` and `style` bindings.
- Provide responsive CSS without external frameworks and ensure images use `NgOptimizedImage`.
Dependencies: None
Estimated Effort: 2 days
