import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NotificationToggleComponent } from '../components/notification-toggle/notification-toggle.component';
import { ReminderSchedulerComponent } from '../components/reminder-scheduler/reminder-scheduler.component';
import { ConnectionStatusService } from '../../shell/services/connection-status.service';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrl: './notification-settings.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NotificationToggleComponent, ReminderSchedulerComponent]
})
export class NotificationSettingsPage {
  private readonly service = inject(NotificationService);
  private readonly connection = inject(ConnectionStatusService);
  protected readonly enabled = this.service.notificationsEnabled;
  protected readonly reminders = this.service.reminders;

  onToggle(enabled: boolean): void {
    this.service.toggle(enabled);
  }

  onSchedule(time: string): void {
    this.service.schedule(time);
  }

  readonly online = this.connection.online;
}
