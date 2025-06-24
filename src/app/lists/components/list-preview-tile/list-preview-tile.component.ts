import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-preview-tile',
  templateUrl: './list-preview-tile.component.html',
  styleUrl: './list-preview-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPreviewTileComponent {
  @Input({ required: true }) title = '';
}
