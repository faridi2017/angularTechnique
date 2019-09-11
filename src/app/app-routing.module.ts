import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule' },
  { path: 'user', loadChildren: './user-panel/user-panel.module#UserPanelModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
