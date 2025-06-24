Task Title: Create Item Form and Item List Components
Description: Provide the UI for adding, editing and viewing items in a list.
Include:
- Build `ItemFormComponent` as a standalone component using reactive forms with signals for form controls. Expose `submitItem` and `cancel` events via `output()`.
- Build `ItemListComponent` showing items grouped by category, each entry with a completion checkbox and edit/delete buttons. Receive `items` via `input()` signal and emit events for edits and removals.
- Both components must set `changeDetection` to `OnPush`, support keyboard navigation and announce changes using `aria-live` regions.
- Layout the form and list with responsive flexbox and ensure color contrast meets WCAG 2.1 AA.
- Unit tests for form validation and list updates, integration tests for add/edit/delete flows with ItemService, and UI tests covering accessibility on mobile and desktop viewports.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Use signals for component state and the new control flow in templates.
- Avoid `ngClass`/`ngStyle` and prefer `class`/`style` bindings.
- Component interactions with ItemService must complete within 1 second.
Dependencies: task-05
Estimated Effort: 2 days
Status: implemented
