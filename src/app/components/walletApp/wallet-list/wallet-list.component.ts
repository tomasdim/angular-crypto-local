import { Component, OnInit } from '@angular/core';
import { Wallet } from '@app/interfaces/wallet.interface';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'],
})
export class WalletListComponent implements OnInit {
  walletList: Wallet[];

  constructor() {
    this.walletList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('walletList');
    if (records !== null) {
      this.walletList = JSON.parse(records);
    }
  }

  delete(id: any) {
    debugger;
    const oldRecords = localStorage.getItem('walletList');
    if (oldRecords !== null) {
      const walletList = JSON.parse(oldRecords);
      walletList.splice(
        walletList.findIndex((a: any) => a.id == id),
        1
      );
      localStorage.setItem('walletList', JSON.stringify(walletList));
    }
    const records = localStorage.getItem('walletList');
    if (records !== null) {
      this.walletList = JSON.parse(records);
    }
  }
}
