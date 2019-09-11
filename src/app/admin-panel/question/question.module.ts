import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { FormsModule } from '@angular/forms';

import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { FiltersPipe } from 'src/app/services/filters.pipe';
@NgModule({
  declarations: [
    QuestionListComponent, 
    QuestionAddComponent,
    QuestionEditComponent,
    FiltersPipe
    ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ]
})
export class QuestionModule { }
