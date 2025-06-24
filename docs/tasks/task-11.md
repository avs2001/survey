Task Title: Accessibility and Performance Audit
Description: Ensure the application meets WCAG 2.1 AA and performance targets.
Include:
- Audit all pages using tools like Lighthouse and axe to identify accessibility issues and missing ARIA attributes.
- Fix keyboard navigation traps, color contrast violations and ensure forms announce validation errors via aria-live regions.
- Review change detection for unnecessary updates and lazy-load feature routes where possible to keep first-load time under 2 seconds.
- Add automated accessibility tests and performance budgets to the CI pipeline.
Technical Constraints:
- Follow Angular style guide and root AGENTS best practices.
- Use only signals and OnPush change detection for components.
- Ensure images use `NgOptimizedImage` and CSS uses semantic colors for high contrast themes.
Dependencies: task-04, task-06, task-07, task-08, task-09, task-10, task-13, task-14
Estimated Effort: 2 days
