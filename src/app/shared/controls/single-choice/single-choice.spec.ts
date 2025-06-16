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

  it('should validate manual entry length', () => {
    component.allowManualEntry = true;
    component.manualMinLength = 3;
    component.updateManual('ab');
    fixture.detectChanges();
    expect((component as any).manualError()).toContain('Minimum length');
  });
});
