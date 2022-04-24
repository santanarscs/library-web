import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansCreateComponent } from './loans-create/loans-create.component';
import { LoansListComponent } from './loans-list/loans-list.component';

const routes: Routes = [
  { path: '', component: LoansListComponent },
  { path: 'create', component: LoansCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
