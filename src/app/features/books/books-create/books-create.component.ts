import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss'],
})
export class BooksCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BooksService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(''),
      author: this.formBuilder.control(''),
      isbn: this.formBuilder.control(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.service
        .saveBook(this.form.value)
        .subscribe(() => this.router.navigate(['/books']));
    }
  }
}
