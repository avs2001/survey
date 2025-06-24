import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-error',
  templateUrl: './auth-error.component.html',
  styleUrl: './auth-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthErrorComponent {}
