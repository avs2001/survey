Task Title: Create ListService with Offline Persistence and Real-Time Sync
Description: Build the service responsible for storing and synchronizing shopping lists.
Include:
- Create a standalone `ListService` exposing a `lists` signal of `List` objects.
- Persist lists in IndexedDB via the `idb` package using a `lists` store and load them during initialization.
- Synchronize with the backend through `GET /lists` and `POST /lists` calls and real-time updates over `webSocket` (`/ws/lists`).
- Queue `addList`, `updateList` and `deleteList` actions while offline and replay them when `ConnectionStatusService.online` becomes true.
- Emit `lastSync` and `syncInProgress` signals for components like SyncStatusComponent and provide a `listErrors` signal for failures.
- Write unit tests for CRUD logic, integration tests for offline queue and WebSocket syncing, and UI tests verifying list updates within 1 second.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use `inject()` for dependencies and signals for state management.
- Avoid `ngClass`/`ngStyle`; prefer `class` and `style` bindings.
- Use HTTPS for all network calls and store only necessary data offline.
Dependencies: task-01, task-02
Estimated Effort: 2 days
Status: implemented
