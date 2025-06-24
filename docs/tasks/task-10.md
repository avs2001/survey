Task Title: Create Sync Status Component
Description: Visualize the application's connectivity and data synchronization state.
Include:
- Build `SyncStatusComponent` as a standalone component with `changeDetection: OnPush` displaying whether the app is online and the last successful sync time.
- Subscribe to `ConnectionStatusService.online`, `ListService.syncInProgress` and `ItemService.syncInProgress` signals to compute overall status.
- Expose an aria-live region announcing status changes and provide color-coded icons for quick recognition.
- Design a compact layout that fits in the app header and scales to mobile screens.
- Add unit tests validating signal computations, integration tests covering offline-to-online transitions, and UI tests ensuring status updates propagate within 1 second.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals and computed state; avoid `ngClass` and `ngStyle`.
- Component should not trigger change detection more than once per update cycle.
Dependencies: task-03, task-05
Estimated Effort: 1 day
Status: implemented
