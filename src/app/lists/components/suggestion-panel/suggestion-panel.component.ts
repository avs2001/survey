import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-panel',
  templateUrl: './suggestion-panel.component.html',
  styleUrl: './suggestion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionPanelComponent {
  @Input() suggestions: string[] = [];
}
