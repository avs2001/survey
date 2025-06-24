import { ChangeDetectionStrategy, Component, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {
  readonly name = input('');
  readonly add = output<string>();

  onSubmit(): void {
    this.add.emit(this.name());
  }
}
