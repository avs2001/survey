import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-reminder-scheduler',
  templateUrl: './reminder-scheduler.component.html',
  styleUrl: './reminder-scheduler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReminderSchedulerComponent {
  readonly time = signal('');
  readonly scheduled = output<string>();

  schedule(): void {
    this.scheduled.emit(this.time());
  }
}
