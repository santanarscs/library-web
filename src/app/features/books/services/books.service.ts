import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { DefaultResponse } from 'src/app/shared/models/DefaultResponse';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<DefaultResponse<Book>>(this.API);
  }

  saveBook(book: Omit<Book, 'id'>) {
    return this.http.post(this.API, book);
  }
}
