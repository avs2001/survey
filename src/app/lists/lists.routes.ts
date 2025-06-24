import { Routes } from '@angular/router';
import { ListOverviewPage } from './overview/list-overview.page';
import { ListDetailPage } from './detail/list-detail.page';

export const LISTS_ROUTES: Routes = [
  { path: '', component: ListOverviewPage },
  { path: ':id', component: ListDetailPage },
];
