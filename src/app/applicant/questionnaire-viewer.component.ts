import { Component, Input, signal, effect, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Questionnaire, Question, Dependency } from '../models/questionnaire.model';
import { InputGroupComponent } from '../kebormed-core/input-group.component';

@Component({
  selector: 'app-questionnaire-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroupComponent],
  templateUrl: './questionnaire-viewer.component.html',
  styleUrls: ['./questionnaire-viewer.component.scss']
})
export class QuestionnaireViewerComponent implements OnInit {
  @Input() questionnaire!: Questionnaire;

  private answersSignal = signal<Record<number, any>>({});
  private visibilitySignal = signal<Record<number, boolean>>({});

  ngOnInit(): void {
    if (this.questionnaire) {
      const initialVis: Record<number, boolean> = {};
      for (const q of this.questionnaire.questions) {
        initialVis[q.order] = q.initialVisibility === 'show';
      }
      this.visibilitySignal.set(initialVis);
    }

    effect(() => {
      const answers = this.answersSignal();
      if (!this.questionnaire) return;
      const vis: Record<number, boolean> = { ...this.visibilitySignal() };
      for (const q of this.questionnaire.questions) {
        const deps = (this.questionnaire.dependencies || []).filter(d => d.targetQuestionOrder === q.order);
        let visible = q.initialVisibility === 'show';
        let hideMatched = false;
        let showMatched = false;
        let hasShowDep = false;
        for (const dep of deps) {
          const ans = answers[dep.sourceQuestionOrder];
          const match = Array.isArray(ans)
            ? ans.includes(dep.sourceAnswerOptionLabel)
            : ans === dep.sourceAnswerOptionLabel;
          if (dep.action === 'hide' && match) {
            hideMatched = true;
          }
          if (dep.action === 'show') {
            hasShowDep = true;
            if (match) {
              showMatched = true;
            }
          }
        }
        if (hideMatched) {
          visible = false;
        } else if (hasShowDep) {
          visible = showMatched;
        }
        vis[q.order] = visible;
      }
      this.visibilitySignal.set(vis);
    });
  }

  protected isVisible(order: number): boolean {
    return this.visibilitySignal()[order];
  }

  protected onAnswerChange(order: number, value: any) {
    this.answersSignal.update(a => ({ ...a, [order]: value }));
  }

  protected onAnswerMultiChange(order: number, label: string, checked: boolean) {
    this.answersSignal.update(a => {
      const existing = (a[order] as string[]) || [];
      const next = checked ? [...existing, label] : existing.filter(l => l !== label);
      return { ...a, [order]: next };
    });
  }

  protected submit() {
    const answers = this.answersSignal();
    const visibleAnswers: Record<number, any> = {};
    for (const q of this.questionnaire.questions) {
      if (this.isVisible(q.order)) {
        visibleAnswers[q.order] = answers[q.order];
      }
    }
    console.log('Submitted answers', visibleAnswers);
  }
}
