# Implementation Tasks

These tasks are derived from the [User Stories](user-stories.md), [PRD](PRD.md) and [SRS](SRS.md) documents.
They outline the work required to build the collaborative shopping list application.
Each task includes technical guidance on state management and the data model so a developer can start implementing immediately.

## Data Model Summary

The SRS defines the following entities:

- **User**: `{ id: string; name: string; email: string; }`
- **List**: `{ id: string; name: string; createdAt: string; }`
- **Item**: `{ id: string; name: string; quantity: number; categoryId: string; completed: boolean; }`
- **Category**: used to group items by aisle/section (id and name fields assumed).
- **Notification**: reminders or alerts for list updates (typical fields: id, userId, message, sentAt, read).

Lists belong to a `User`, contain many `Item` entries and each `Item` is linked to a `Category`. A `User` also receives many `Notification` records.

## Frontend Tasks

1. **Bootstrap Angular PWA**
   - Create an Angular 20 project configured as a PWA with a service worker.
   - Provide offline caching and IndexedDB persistence using a data service.
   - Expose an `online` signal that reflects connection status; update it through the `navigator.onLine` API.

2. **Authentication Screens**
   - Build login and signup pages with reactive forms and signals for form state.
   - Submit credentials to `POST /users` for sign up and to the auth endpoint for login.
   - Store the returned token in a dedicated `AuthService` and expose a `currentUser` signal.

3. **List Overview Page**
   - Fetch lists via `GET /lists` and store them in a `lists` signal.
   - Persist lists in IndexedDB for offline use and reconcile with the backend when back online.
   - Provide a form to create a list using `POST /lists` and update the local signal and IndexedDB store on success.

4. **List Detail Page**
   - Load items for the selected list through `GET /lists/{listId}/items`.
   - Maintain an `items` signal holding `Item[]` and keep it in sync with a WebSocket channel.
   - Changes made offline are queued locally and synced when connectivity returns.

5. **Item Form & Editing**
   - Implement add, edit and delete operations using `POST`, `PUT` and `DELETE /lists/{listId}/items/{itemId}`.
   - Use reactive forms controlled by signals. Each `Item` record includes `name`, `quantity`, `categoryId` and `completed` fields from the data model.
   - Group items by `Category` using a computed signal derived from `items`.

6. **Category Filter & Suggestions**
   - Allow filtering the item list by `categoryId`. The selected category is stored in a signal.
   - Fetch suggested items based on history and update a `suggestions` computed signal whenever the list changes.

7. **Notification Settings**
   - Provide UI to subscribe to push notifications and schedule reminders.
   - Manage the enabled/disabled state via a signal and send the preference to the backend notification service.

8. **Accessibility & Performance**
   - Audit all pages against WCAG&nbsp;2.1 AA guidelines.
   - Use `ChangeDetectionStrategy.OnPush` and keep state in signals to minimize re-rendering.

## Backend Tasks

1. **User Endpoint**
   - Implement `POST /users` to create a user and return an auth token.
   - Store `name` and `email` as defined in the User schema.

2. **List APIs**
   - Provide `GET /lists`, `POST /lists`, `GET /lists/{listId}`, `PUT /lists/{listId}` and `DELETE /lists/{listId}`.
   - Persist `name` and `createdAt` fields for each list.

3. **Item APIs**
   - Implement `GET /lists/{listId}/items`, `POST /lists/{listId}/items` and `PUT`/`DELETE /lists/{listId}/items/{itemId}`.
   - Ensure item payloads match the Item schema including `quantity`, `categoryId` and `completed`.

4. **WebSocket Synchronization**
   - Broadcast list and item updates to connected clients in real time.
   - Queue notifications for offline clients to process when they reconnect.

5. **Authentication Service**
   - Use token-based authentication (e.g., JWT) secured over HTTPS for all API calls.
   - Verify tokens on each request before accessing list or item data.

6. **Data Persistence**
   - Create database tables for `users`, `lists`, `items`, `categories` and `notifications` following the SRS entity diagram.
   - Define foreign keys: `lists.userId`, `items.listId`, `items.categoryId`, `notifications.userId`.

7. **Item Suggestion Service**
   - Expose an endpoint to return frequently purchased items based on historical `Item` records.
   - Use query logic or a small recommendation engine to generate results.

8. **Notification Service**
   - Send push notifications when items are added or when a scheduled shopping reminder triggers.
   - Integrate with a third-party push provider and store pending notifications in the database.

## Testing Tasks

1. **Frontend Unit Tests** – cover components, services and signals using Angular TestBed. Mock WebSocket and HTTP calls.
2. **Backend Unit Tests** – test API routes and WebSocket handlers with authorization checks.
3. **End-to-End Tests** – simulate multiple clients to verify real-time sync and offline edits.
4. **Performance Tests** – measure app load time (<2&nbsp;s) and sync latency (<1&nbsp;s) as required by the SRS.

## DevOps Tasks

1. **CI/CD Pipeline** – automate lint, test and deploy processes with GitHub Actions.
2. **Infrastructure Provisioning** – use IaC to deploy the API, database and static site hosting with WebSocket and push services.
3. **Monitoring & Logging** – collect backend metrics and client errors, store logs centrally and expose health endpoints.
4. **Automated Backups** – schedule recurring database backups with restore scripts.

