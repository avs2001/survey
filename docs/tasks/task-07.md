Task Title: Add Category Service and Filter Component
Description: Provide category data and filtering for items.
Include:
- Create a `CategoryService` with `providedIn: 'root'` that fetches categories from `/categories` and stores them in a `categories` signal persisted to IndexedDB.
- Build `CategoryFilterComponent` as a standalone component receiving a list of categories via `input()` and emitting `categorySelected` via `output()`.
- Use radio buttons or a select element with proper ARIA roles for accessibility. Apply responsive styles so the filter is usable on small screens.
- Integrate with `ItemService` to filter items by the selected category.
- Write unit tests for CategoryService caching logic and the component's emitted events, integration tests verifying filter interactions with ItemService, and UI tests ensuring screen reader compatibility.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals and new template control flow.
- Avoid `ngClass`/`ngStyle`; prefer `class` and `style` bindings.
- All network communication must use HTTPS and category fetch should not exceed 1 second.
Dependencies: task-05
Estimated Effort: 1.5 days
