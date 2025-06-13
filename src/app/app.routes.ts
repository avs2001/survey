import { Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire';
import { QuestionnaireAdminComponent } from './questionnaire-admin';

export const routes: Routes = [
  { path: '', component: QuestionnaireComponent },
  { path: 'admin', component: QuestionnaireAdminComponent }
];
