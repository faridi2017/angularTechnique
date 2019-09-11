import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ResponseRoutingModule } from './response-routing.module';
import { ResponseListComponent } from './response-list/response-list.component';
import { ResponseViewComponent } from './response-view/response-view.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatCardModule} from "@angular/material";
@NgModule({
  declarations: [ResponseListComponent, ResponseViewComponent],
  imports: [
    CommonModule,
    ResponseRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule

  ]
})
export class ResponseModule { }
