Task Title: Implement Authentication Screens and AuthService
Description: Build the authentication feature covering registration and login.
Include:
- **LoginPage** and **SignupPage** standalone components using reactive forms with signals for form state. Each page exposes `submit` events via `output()` and sets `changeDetection` to `OnPush`.
- Use **AuthService** wrapping `POST /users` for sign up and `POST /login` for authentication. Store the returned JWT token in `localStorage` and expose a `currentUser` signal with user details.
- Provide an HTTP interceptor that attaches the `Authorization` header on all requests when a token is available.
- Disable form submission while `ConnectionStatusService.online` is false and display an offline notice.
- Apply ARIA labels to all form controls and ensure keyboard navigation. Style the pages with responsive flexbox layouts and `NgOptimizedImage` for any logos.
- Unit tests for AuthService including token storage and header injection. Integration tests covering login and signup flows with error handling. UI tests verifying accessibility on mobile and desktop viewports.
Technical Constraints:
- Angular 20, RxJS 7 and TypeScript 5 with strict settings.
- Standalone components, signals for state and modern control flow (`@if`).
- Avoid `ngClass`/`ngStyle`; prefer `class` and `style` bindings.
- Page load should be under 2 seconds and form submission responses under 1 second.
- Use HTTPS for API calls and never store passwords locally.
Dependencies: task-01
Estimated Effort: 3 days
