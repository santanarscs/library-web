import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCreateComponent } from './books-create/books-create.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'create', component: BooksCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
