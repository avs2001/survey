import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListService } from '../services/list.service';
import { AddListButtonComponent } from '../components/add-list-button/add-list-button.component';
import { ListPreviewTileComponent } from '../components/list-preview-tile/list-preview-tile.component';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.page.html',
  styleUrl: './list-overview.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, AddListButtonComponent, ListPreviewTileComponent]
})
export class ListOverviewPage {
  private readonly listService = inject(ListService);
  protected readonly lists = this.listService.lists;

  onAdd(): void {
    this.listService.addList('New List');
  }
}
