import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
   FormsModule,
   MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule
  ]
})
export class DashboardModule { }
