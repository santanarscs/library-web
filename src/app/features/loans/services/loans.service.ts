import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultResponse } from 'src/app/shared/models/DefaultResponse';
import { Loan } from '../models/Loan';

@Injectable({
  providedIn: 'root',
})
export class LoansService {
  private readonly API = 'http://localhost:8080/api/loans';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<DefaultResponse<Loan>>(this.API);
  }

  saveLoan(loan: Omit<Loan, 'id'>) {
    return this.http.post(this.API, loan);
  }

  giveBack(id: string) {
    return this.http.patch(`${this.API}/${id}`, { returned: true });
  }
}
