import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleChoice } from './multiple-choice';

describe('MultipleChoice', () => {
  let fixture: ComponentFixture<MultipleChoice>;
  let component: MultipleChoice;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleChoice]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleChoice);
    component = fixture.componentInstance;
    component.options = ['A', 'B', 'C'];
    fixture.detectChanges();
  });

  it('should emit selected values', () => {
    component.toggle('A', true);
    fixture.detectChanges();
    expect(component.value().selections).toEqual(['A']);
  });

  it('should validate min selections', () => {
    component.required = true;
    component.minSelections = 2;
    component.toggle('A', true);
    fixture.detectChanges();
    expect((component as any).selectionError()).toContain('at least');
  });

  it('should validate manual entry length', () => {
    component.allowManualEntry = true;
    component.manualMinLength = 3;
    component.updateManual('ab');
    fixture.detectChanges();
    expect((component as any).manualError()).toContain('Minimum length');
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
});
