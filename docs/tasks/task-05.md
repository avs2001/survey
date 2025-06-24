Task Title: Implement ItemService with Offline Queue and WebSocket Updates
Description: Manage list items with full offline support and live synchronization.
Include:
- Create a standalone `ItemService` exposing an `items` signal keyed by list id and methods `addItem`, `updateItem` and `deleteItem`.
- Persist items in IndexedDB via `idb` under an `items` store and initialize from storage at startup.
- Communicate with `/lists/{listId}/items` endpoints for CRUD operations and subscribe to `/ws/items` over the RxJS `webSocket` API for real-time updates.
- Queue item mutations when `ConnectionStatusService.online` is false and replay them once connectivity returns.
- Emit a `syncInProgress` signal and update `lastSync` timestamps for consumption by SyncStatusComponent.
- Provide unit tests for item manipulation, integration tests covering offline queue processing and WebSocket updates, and UI tests ensuring item changes appear within 1 second of sync.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use `inject()` for services, signals for state management and `computed()` for derived data.
- Avoid `ngClass`/`ngStyle`; prefer `class` and `style` bindings.
- Use HTTPS for all API and WebSocket communication and store only minimal item data offline.
Dependencies: task-03
Estimated Effort: 2 days
