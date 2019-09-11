import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';

const routes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'add', component: QuestionAddComponent },
  { path: 'edit', component: QuestionEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
