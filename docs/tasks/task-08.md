Task Title: Develop Suggestion Service and Panel Component
Description: Offer smart recommendations for frequently purchased items.
Include:
- Implement `SuggestionService` (provided in root) that retrieves suggestions from `/suggestions` and exposes a `suggestions` computed signal based on current items from `ItemService`.
- Cache suggestions in IndexedDB for offline usage and refresh them whenever items change.
- Build `SuggestionPanelComponent` as a standalone component listing suggested items with an Add button using `output()` to trigger `ItemService.addItem`.
- Ensure the panel is fully keyboard accessible and responsive with a collapsible design on small screens.
- Write unit tests for SuggestionService logic and the component interactions, integration tests verifying suggestions refresh on list updates, and UI tests covering responsive behaviour and accessibility.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals, computed state and new template control flow; avoid `ngClass` and `ngStyle`.
- Network calls must be over HTTPS and suggestion fetches should complete within 1 second.
Dependencies: task-05
Estimated Effort: 2 days
Status: implemented
