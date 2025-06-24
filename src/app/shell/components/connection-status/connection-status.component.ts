import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ConnectionStatusService } from '../../services/connection-status.service';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrl: './connection-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionStatusComponent {
  readonly connected = input(inject(ConnectionStatusService).online());
}
