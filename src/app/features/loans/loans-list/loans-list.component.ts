import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, retry, switchMap, tap } from 'rxjs';
import { Loan } from '../models/Loan';
import { LoansService } from '../services/loans.service';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
registerLocaleData(localPt, 'pt');
@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
})
export class LoansListComponent implements OnInit {
  loans$: Observable<Loan[]>;

  constructor(private loansService: LoansService) {
    this.loans$ = this.loansService.getAll().pipe(
      map((response) => response.content),
      tap((response) => console.log(response)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  giveBack(id: string) {
    if (id) {
      this.loans$ = this.loansService.giveBack(id).pipe(
        switchMap(() => this.loansService.getAll()),
        map((response) => response.content),
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
    }
  }
}
