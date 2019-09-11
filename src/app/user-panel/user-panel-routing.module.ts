import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';

const routes: Routes = [
  {
    path: '', component: UserNavigationComponent, children: [
      { path: 'user-dashboard', loadChildren: './user-dashboard/user-dashboard.module#UserDashboardModule' },
      { path: 'survey', loadChildren: './survey/survey.module#SurveyModule' },

      { path: '', redirectTo: 'user-dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
