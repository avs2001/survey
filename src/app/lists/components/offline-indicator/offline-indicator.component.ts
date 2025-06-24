import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-offline-indicator',
  templateUrl: './offline-indicator.component.html',
  styleUrl: './offline-indicator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfflineIndicatorComponent {
  @Input() offline = false;
}
