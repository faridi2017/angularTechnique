import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  { path: '', component: Parent1Component },
  { path: 'ch1', component: Child1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildToParentRoutingModule { }
