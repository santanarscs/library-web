import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoansService } from '../services/loans.service';
@Component({
  selector: 'app-loans-create',
  templateUrl: './loans-create.component.html',
  styleUrls: ['./loans-create.component.scss'],
})
export class LoansCreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoansService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      isbn: this.formBuilder.control(''),
      customer: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.service
        .saveLoan(this.form.value)
        .subscribe(() => this.router.navigate(['/loans']));
    }
  }
}
