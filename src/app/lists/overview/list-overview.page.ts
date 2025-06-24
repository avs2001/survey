import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.page.html',
  styleUrl: './list-overview.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOverviewPage {
  protected readonly lists = signal<string[]>([]);
}
