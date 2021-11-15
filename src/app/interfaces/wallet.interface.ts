import { Transaction } from './transaction.interface';

export class Wallet {
  id?: number;
  name?: string;
  value?: number;
  transactions?: Array<Transaction>;
}
