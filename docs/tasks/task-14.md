Task Title: Build List Detail Page Combining Item Management Components
Description: Assemble a dedicated page showing a single shopping list with filtering, suggestions and item editing.
Include:
- Create `ListDetailPage` as a standalone component routed as `/lists/:id` with `changeDetection: OnPush`.
- Compose `ItemListComponent`, `ItemFormComponent`, `CategoryFilterComponent` and `SuggestionPanelComponent` within a responsive layout. Use signals from `ItemService` and `CategoryService` to manage state.
- Allow adding, editing and deleting items from this page, updating the list in real time and queuing actions offline.
- Display the current category filter and refresh suggestions whenever items change.
- Provide keyboard navigation and ARIA roles for the item list and form controls. Ensure the layout adapts for narrow viewports.
- Write unit tests for page logic, integration tests verifying item and category interactions with `ItemService`, and UI tests covering offline behaviour, suggestion refresh and accessibility.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals and modern control flow; avoid `ngClass`/`ngStyle`.
- All actions on this page must respond within 1 second.
Dependencies: task-04, task-05, task-06, task-07, task-08
Estimated Effort: 2 days

Status: implemented
