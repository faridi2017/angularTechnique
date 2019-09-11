import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToParentRoutingModule } from './child-to-parent-routing.module';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [Parent1Component, Child1Component],
  imports: [
    CommonModule,
    ChildToParentRoutingModule
  ]
})
export class ChildToParentModule { }
