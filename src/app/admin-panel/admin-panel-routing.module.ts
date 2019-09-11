import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'question', loadChildren: './question/question.module#QuestionModule' },
      { path: 'response', loadChildren: './response/response.module#ResponseModule' },
      { path: 'comm', loadChildren: './communication/communication.module#CommunicationModule' },
      { path: 'comm2', loadChildren: './child-to-parent/child-to-parent.module#ChildToParentModule' },
     
//ChildToParentModule
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
