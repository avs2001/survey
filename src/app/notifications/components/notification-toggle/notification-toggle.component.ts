import { ChangeDetectionStrategy, Component, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-notification-toggle',
  templateUrl: './notification-toggle.component.html',
  styleUrl: './notification-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationToggleComponent {
  @Input() enabled = false;
  readonly toggled = output<boolean>();

  onToggle(): void {
    this.enabled = !this.enabled;
    this.toggled.emit(this.enabled);
  }
}
