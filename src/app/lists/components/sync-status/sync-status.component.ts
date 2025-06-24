import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sync-status',
  templateUrl: './sync-status.component.html',
  styleUrl: './sync-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncStatusComponent {
  @Input() status = 'online';
}
