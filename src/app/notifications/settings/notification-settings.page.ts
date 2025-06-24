import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrl: './notification-settings.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationSettingsPage {
  protected readonly enabled = signal(false);
}
