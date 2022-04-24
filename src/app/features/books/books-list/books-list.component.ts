import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BooksService) {
    this.books$ = this.bookService.getAll().pipe(
      map((response) => response.content),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
  ngOnInit(): void {}
}
