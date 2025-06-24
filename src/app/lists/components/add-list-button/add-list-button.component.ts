import { ChangeDetectionStrategy, Component, Output, output } from '@angular/core';

@Component({
  selector: 'app-add-list-button',
  templateUrl: './add-list-button.component.html',
  styleUrl: './add-list-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddListButtonComponent {
  readonly add = output<void>();

  onClick(): void {
    this.add.emit();
  }
}
