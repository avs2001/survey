Task Title: Implement Notification Service and Settings Page
Description: Provide push notifications and user-configurable reminder settings.
Include:
- Create `NotificationService` with methods to request push permission, subscribe via the Web Push API and schedule reminders. Persist preferences in IndexedDB and sync them with `/notifications/preferences` endpoints.
- Expose signals `notificationsEnabled` and `reminders` for UI consumption and handle offline preference updates queued for later sync.
- Build `NotificationSettingsPage` as a standalone component with toggles for push subscription and a form for reminder times using signals. Display current connectivity via `ConnectionStatusService`.
- Ensure all form controls are labeled for screen readers and accessible via keyboard. Layout the page with responsive flexbox.
- Add unit tests for service logic including permission requests and preference storage, integration tests covering push subscription flow with the backend, and UI tests validating accessible form controls on multiple viewports.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals for state, `inject()` for dependencies and new control flow in templates.
- Use HTTPS for all network requests and never store sensitive tokens unencrypted.
Dependencies: task-02, task-01
Estimated Effort: 2 days
Status: implemented
