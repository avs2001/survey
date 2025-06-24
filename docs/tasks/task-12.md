Task Title: End-to-End Testing for Offline and Real-Time Scenarios
Description: Validate application behaviour across multiple clients and network conditions using Cypress.
Include:
- Configure Cypress with a mock service worker and WebSocket server to simulate offline and real-time scenarios.
- Write tests verifying that item edits made offline are queued and synchronized within 1 second when connectivity is restored.
- Verify push notifications from NotificationService trigger correctly using the service worker test environment.
- Test suggestion updates when lists change and ensure UI layouts remain responsive across common device widths.
- Provide cross-browser tests for keyboard navigation and screen-reader announcements.
Technical Constraints:
- Use Cypress 13 with TypeScript support.
- Tests should run in CI with artifacts for screenshots and logs.
Dependencies: task-04, task-06, task-08, task-09, task-13, task-14
Estimated Effort: 3 days
