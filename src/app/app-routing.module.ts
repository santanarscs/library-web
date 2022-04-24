import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loans',
  },
  {
    path: 'books',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'loans',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: '**',
    redirectTo: 'books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
