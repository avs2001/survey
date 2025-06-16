import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleChoice } from './single-choice';

describe('SingleChoice', () => {
  let fixture: ComponentFixture<SingleChoice>;
  let component: SingleChoice;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleChoice]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleChoice);
    component = fixture.componentInstance;
    component.options = ['A', 'B', 'C'];
    fixture.detectChanges();
  });

  it('should emit selected value', () => {
    component.select('B');
    fixture.detectChanges();
    expect(component.value().selection).toBe('B');
  });

  it('should require selection when configured', () => {
    component.required = true;
    fixture.detectChanges();
    expect((component as any).selectionError()).toContain('required');
  });

  it('should allow manual entry to satisfy required', () => {
    component.required = true;
    component.allowManualEntry = true;
    component.updateManual('other');
    fixture.detectChanges();
    expect((component as any).selectionError()).toBe('');
  });

  it('should validate manual entry length', () => {
    component.allowManualEntry = true;
    component.manualMinLength = 3;
    component.updateManual('ab');
    fixture.detectChanges();
    expect((component as any).manualError()).toContain('Minimum length');
  });

  it('should deselect option when manual value entered', () => {
    component.allowManualEntry = true;
    component.select('A');
    component.updateManual('custom');
    fixture.detectChanges();
    expect(component.value().selection).toBe('');
    expect(component.value().manual).toBe('custom');
  });

  it('should clear manual value when option selected', () => {
    component.allowManualEntry = true;
    component.updateManual('other');
    component.select('B');
    fixture.detectChanges();
    expect(component.value().selection).toBe('B');
    expect(component.value().manual).toBe('');
  });

  it('should render manual label', () => {
    component.allowManualEntry = true;
    fixture.detectChanges();
    let label = fixture.nativeElement.querySelector('label.manual') as HTMLElement;
    expect(label.textContent).toContain('Other');
    component.manualLabel = 'Custom';
    fixture.detectChanges();
    label = fixture.nativeElement.querySelector('label.manual') as HTMLElement;
    expect(label.textContent).toContain('Custom');
  });

  it('should not show errors before interaction', () => {
    component.required = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.error')).toBeNull();
    component.updateManual('');
    fixture.detectChanges();
    const error = fixture.nativeElement.querySelector('.error') as HTMLElement;
    expect(error.textContent).toContain('Selection required');
  });
});
