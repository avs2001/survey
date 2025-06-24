import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  protected readonly formState = signal({});
}
