import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationMenuComponent,
    ConnectionStatusComponent,
  ],
})
export class ShellComponent {}
