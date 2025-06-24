import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { ConnectionStatusService } from '../../../shell/services/connection-status.service';
import { ListService } from '../../services/list.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-sync-status',
  templateUrl: './sync-status.component.html',
  styleUrl: './sync-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncStatusComponent {
  private readonly connection = inject(ConnectionStatusService);
  private readonly list = inject(ListService);
  private readonly items = inject(ItemService);

  readonly status = computed(() => {
    const online = this.connection.online();
    const syncing = this.list.syncInProgress() || this.items.syncInProgress();
    return online ? (syncing ? 'syncing' : 'online') : 'offline';
  });
}
