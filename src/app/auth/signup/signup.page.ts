import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { output } from '@angular/core';
import { ConnectionStatusService } from '../../shell/services/connection-status.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class SignupPage {
  private readonly fb = inject(FormBuilder);
  private readonly connection = inject(ConnectionStatusService);
  readonly submit = output<{ email: string; password: string }>();

  protected readonly form = this.fb.nonNullable.group({
    email: '',
    password: ''
  });

  readonly canSubmit = this.connection.online;

  onSubmit(): void {
    if (this.form.valid && this.connection.online()) {
      this.submit.emit(this.form.getRawValue());
    }
  }
}
