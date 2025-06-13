import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-group">
      <label *ngIf="label" [for]="for">{{ label }}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `.input-group { display: flex; flex-direction: column; margin-bottom: 1rem; }`,
    `label { font-weight: 600; margin-bottom: 0.25rem; }`
  ]
})
export class InputGroupComponent {
  @Input() label = '';
  @Input() for = '';
}
