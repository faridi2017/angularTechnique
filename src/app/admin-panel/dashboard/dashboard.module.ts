import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxTwitterTimelineModule
  ]
})
export class DashboardModule { }
