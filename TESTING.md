# Testing Guidelines

## 1. Overview

This document provides guidance on how to create and maintain tests for the **Sephora Accelerate Questionnaire Project**. The project includes an Admin Portal and an Applicant Portal built with Angular 20, signals, and modern control flow syntax. Well‑written tests ensure that questionnaires behave correctly as they evolve and that services handle data consistently.

Testing verifies that:

- Dynamic rendering of questions works across multiple types.
- Show/hide dependencies update at runtime.
- Services load, save, and submit data without errors.

## 2. Testing Strategy

- **Unit testing**: Use *Jasmine* + *Karma*. Jest is possible but Jasmine is configured by default.
- **Component testing**: Use `TestBed` together with Angular Testing Library for clean DOM interactions.
- **Service testing**: Where asynchronous logic exists, use RxJS marble testing utilities to simulate observables.

## 3. Setup

Install dependencies and run tests with npm:

```bash
npm install
npm test            # Runs Karma in watch mode
npm test -- --watch=false  # Run tests once in CI
```

Recommended VS Code extensions:

- Angular and TypeScript Language tools
- Jasmine or Jest Test Runner (for example, **Angular Testing** extension)
- Angular Snippets for modern Angular features

## 4. Folder Structure

Place test files next to the code under `src/` using the `.spec.ts` suffix.

```
src/app/questionnaire-viewer/questionnaire-viewer.component.ts
src/app/questionnaire-viewer/questionnaire-viewer.component.spec.ts
```

Name tests using the pattern `component-name.component.spec.ts` or `service-name.service.spec.ts`.

## 5. Component Testing Guidelines

- **Dynamic Rendering**: Verify DOM changes when `@if` and `@for` control flows update. Use `fixture.detectChanges()` after modifying data.
- **Signals**: Update signal values and assert the DOM or emitted events. Signals behave synchronously; after assignment, call `fixture.detectChanges()` to update the view.
- **Mocking @kebormed/core**: If components from `@kebormed/core` cause heavy rendering, replace them with simple mock components using `Component` stubs in the test module.

Key aspects to test:

1. **Initial rendering** – the component shows the expected questions when loaded.
2. **User interactions** – clicking buttons or typing in inputs updates component state.
3. **Dependency logic** – when a controlling answer changes, dependent questions show or hide appropriately.
4. **Emitted events** – verify outputs such as `save`, `cancel`, or `valueChange` are emitted with the correct payload.

## 6. Service Testing Guidelines

- Mock HTTP calls using Angular's `HttpClientTestingModule` or provide simulated API implementations.
- For services exposing signals (e.g., `isLoading`, `isSubmitting`), set up tests that check the signal value before and after operations.
- Verify data transformations by inspecting returned objects or emitted observables.

## 7. Sample Test Cases

### QuestionnaireViewerComponent
```ts
it('shows or hides questions based on dependencies', () => {
  const fixture = TestBed.createComponent(QuestionnaireViewerComponent);
  fixture.componentInstance.questionnaire = mockQuestionnaireWithDependencies();
  fixture.detectChanges();

  // Initially only visible questions should exist
  expect(fixture.nativeElement.querySelectorAll('app-question').length)
    .toBe(1);

  // Change answer to reveal hidden question
  fixture.componentInstance.onAnswerChange({order: 1, value: 'Yes'});
  fixture.detectChanges();

  expect(fixture.nativeElement.querySelectorAll('app-question').length)
    .toBe(2);
});
```

### QuestionRendererComponent
```ts
it('emits valueChange when input updates', () => {
  const fixture = TestBed.createComponent(QuestionRendererComponent);
  fixture.componentInstance.question = { type: 'short_text', label: 'Name', order: 1 } as any;
  fixture.detectChanges();

  const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
  input.value = 'Alice';
  input.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  expect(fixture.componentInstance.valueChange.emit).toHaveBeenCalledWith('Alice');
});
```

### DependencyEditorComponent
```ts
it('adds and removes dependencies', () => {
  const fixture = TestBed.createComponent(DependencyEditorComponent);
  fixture.detectChanges();

  fixture.componentInstance.addDependency();
  fixture.detectChanges();
  expect(fixture.componentInstance.form.controls.length).toBe(1);

  fixture.componentInstance.removeDependency(0);
  fixture.detectChanges();
  expect(fixture.componentInstance.form.controls.length).toBe(0);
});
```

### QuestionnaireService
```ts
it('saveQuestionnaire updates local state', fakeAsync(() => {
  const service = TestBed.inject(QuestionnaireService);
  const q = mockQuestionnaire();
  service.saveQuestionnaire(q).subscribe();
  tick();
  expect(service.current.value).toEqual(q);
}));
```

### ResponseService
```ts
it('submitResponse sets isSubmitting', fakeAsync(() => {
  const service = TestBed.inject(ResponseService);
  service.submitResponse(mockResponse()).subscribe();

  expect(service.isSubmitting()).toBeTrue();
  tick();
  expect(service.isSubmitting()).toBeFalse();
}));
```

## 8. Test Coverage

Generate coverage reports with:

```bash
ng test --watch=false --code-coverage
```

Aim for **80%** coverage across components and services. Review coverage output under `coverage/` for lines not exercised by tests.

## 9. CI Integration

Integrate test execution into your CI/CD pipeline using the same `npm test -- --watch=false` command. Configure the pipeline to fail when tests fail or when coverage drops below the target percentage. Artifacts generated in `coverage/` can be published for review.

## 10. Future Improvements

- **Visual testing** using tools like Storybook or Chromatic to ensure consistent UI rendering.
- **End-to-end testing** with Cypress or Playwright for full user flows.
- **Accessibility testing** using axe-core to catch a11y issues.
- Consider adding automated lint checks and formatting to maintain code quality.

