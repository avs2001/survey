import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shell/shell.routes').then(m => m.SHELL_ROUTES),
  },
];
