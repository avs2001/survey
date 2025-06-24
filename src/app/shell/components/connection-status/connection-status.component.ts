import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrl: './connection-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionStatusComponent {
  readonly connected = input(true);
}
