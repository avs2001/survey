import { Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';
import { ListOverviewPage } from './overview/list-overview.page';
import { ListDetailPage } from './detail/list-detail.page';

export const LISTS_ROUTES: Routes = [
  { path: '', component: ListOverviewPage, canActivate: [authGuard] },
  { path: ':id', component: ListDetailPage, canActivate: [authGuard] },
];
