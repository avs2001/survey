import { ChangeDetectionStrategy, Component, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-reminder-scheduler',
  templateUrl: './reminder-scheduler.component.html',
  styleUrl: './reminder-scheduler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReminderSchedulerComponent {
  readonly time = input('');
  readonly scheduled = output<string>();

  schedule(): void {
    this.scheduled.emit(this.time());
  }
}
