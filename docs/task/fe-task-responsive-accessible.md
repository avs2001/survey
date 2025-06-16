# Frontend Task Breakdown: Responsive & Accessible Design

Guidelines for ensuring the portals work on various devices and meet basic accessibility standards as stated in the [SRS](../srs.md).

## Goals
- Provide a responsive layout for desktop and mobile screens.
- Pass accessibility checks with ARIA labels and keyboard navigation.

## Tasks
1. **Responsive Layout**
   - Use CSS grid/flex and media queries or Tailwind utility classes.
   - Verify components scale from 1440px down to mobile widths.
2. **Accessibility Features**
   - Add ARIA roles and labels to form controls and buttons.
   - Ensure all interactive elements are reachable via keyboard.
   - Provide focus styles and skip links where appropriate.
3. **Testing**
   - Integrate axe-core or a similar tool into Jest or Playwright tests.
   - Document any issues and update styles accordingly.

## Best Practices
- Adhere to the code quality checklist in [AGENTS.md](../../AGENTS.md).
- Keep SCSS localized to components and avoid global overrides.
- Use semantic HTML elements whenever possible.

