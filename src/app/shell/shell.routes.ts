import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.routes').then(m => m.AUTH_ROUTES),
      },
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.routes').then(m => m.LISTS_ROUTES),
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.routes').then(m => m.NOTIFICATIONS_ROUTES),
      },
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];
