import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseListComponent } from './response-list/response-list.component';
import { ResponseViewComponent } from './response-view/response-view.component';

const routes: Routes = [
  { path: '', component: ResponseListComponent },
  { path: 'view', component: ResponseViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseRoutingModule { }
