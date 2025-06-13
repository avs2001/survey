import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupComponent } from '../kebormed-core/input-group.component';
import { Question, Dependency } from '../models/questionnaire.model';

@Component({
  selector: 'app-dependency-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroupComponent],
  templateUrl: './dependency-editor.component.html',
  styleUrls: ['./dependency-editor.component.scss']
})
export class DependencyEditorComponent implements OnChanges {
  @Input({ required: true }) questions: Question[] = [];
  @Input() initialDependencies: Dependency[] = [];
  @Output() dependenciesChange = new EventEmitter<Dependency[]>();

  protected depsSignal = signal<Dependency[]>([]);
  protected editingIndex = signal<number | null>(null);
  protected editingDep = signal<Dependency | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialDependencies']) {
      this.depsSignal.set(this.initialDependencies ? [...this.initialDependencies] : []);
    }
  }

  protected startAdd() {
    const defaultSource = this.questions[0]?.order ?? 0;
    const defaultTarget = this.questions[0]?.order ?? 0;
    const newDep: Dependency = {
      sourceQuestionOrder: defaultSource,
      sourceAnswerOptionLabel: this.getQuestionByOrder(defaultSource)?.answerOptions?.[0]?.label || '',
      targetQuestionOrder: defaultTarget,
      action: 'show'
    };
    this.editingDep.set(newDep);
    this.editingIndex.set(-1);
  }

  protected startEdit(index: number) {
    const dep = this.depsSignal()[index];
    this.editingDep.set({ ...dep });
    this.editingIndex.set(index);
  }

  protected cancelEdit() {
    this.editingDep.set(null);
    this.editingIndex.set(null);
  }

  protected saveDep() {
    const dep = this.editingDep();
    if (!dep) return;
    const idx = this.editingIndex();
    if (idx === -1) {
      this.depsSignal.update(arr => [...arr, dep]);
    } else if (idx !== null) {
      this.depsSignal.update(arr => arr.map((d, i) => (i === idx ? dep : d)));
    }
    this.cancelEdit();
    this.dependenciesChange.emit(this.depsSignal());
  }

  protected deleteDep(index: number) {
    this.depsSignal.update(arr => arr.filter((_, i) => i !== index));
    this.dependenciesChange.emit(this.depsSignal());
  }

  protected getQuestionByOrder(order: number): Question | undefined {
    return this.questions.find(q => q.order === order);
  }

  protected onSourceQuestionChange(order: number) {
    const q = this.getQuestionByOrder(order);
    const firstOpt = q?.answerOptions?.[0]?.label || '';
    const current = this.editingDep();
    if (!current) return;
    const label = q?.answerOptions?.some(o => o.label === current.sourceAnswerOptionLabel)
      ? current.sourceAnswerOptionLabel
      : firstOpt;
    this.editingDep.set({ ...current, sourceQuestionOrder: order, sourceAnswerOptionLabel: label });
  }

  protected onSourceAnswerChange(label: string) {
    const dep = this.editingDep();
    if (!dep) return;
    this.editingDep.set({ ...dep, sourceAnswerOptionLabel: label });
  }

  protected onTargetQuestionChange(order: number) {
    const dep = this.editingDep();
    if (!dep) return;
    this.editingDep.set({ ...dep, targetQuestionOrder: order });
  }

  protected onActionChange(action: 'show' | 'hide') {
    const dep = this.editingDep();
    if (!dep) return;
    this.editingDep.set({ ...dep, action });
  }

  protected emitChanges() {
    this.dependenciesChange.emit(this.depsSignal());
  }
}

