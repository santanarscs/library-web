import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksCreateComponent } from './books-create/books-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksListComponent, BooksCreateComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BooksModule {}
