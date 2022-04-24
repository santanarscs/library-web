import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansListComponent } from './loans-list/loans-list.component';
import { LoansRoutingModule } from './loans-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoansCreateComponent } from './loans-create/loans-create.component';

@NgModule({
  declarations: [LoansListComponent, LoansCreateComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LoansModule {}
