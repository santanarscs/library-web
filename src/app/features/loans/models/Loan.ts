import { Book } from '../../books/models/book';

export interface Loan {
  id: string;
  customer: string;
  email: string;
  isbn: string;
  returned: boolean;
  loanDate?: string;
  book?: Book;
}
