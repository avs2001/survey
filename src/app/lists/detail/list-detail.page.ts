import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrl: './list-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailPage {
  protected readonly items = signal<string[]>([]);
}
