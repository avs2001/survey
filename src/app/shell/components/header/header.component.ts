import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConnectionStatusService } from '../../services/connection-status.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly online = inject(ConnectionStatusService).online;
  protected readonly activeRoute = inject(RouteService).activeRoute;
}
