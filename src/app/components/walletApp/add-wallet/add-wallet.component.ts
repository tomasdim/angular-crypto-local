import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from '@app/interfaces/wallet.interface';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit {
  Wallet: Wallet;
  constructor(private router: Router) {
    this.Wallet = new Wallet();
  }

  ngOnInit(): void {}

  getNewWalletId() {
    debugger;
    const oldRecords = localStorage.getItem('walletList');
    if (oldRecords !== null) {
      const walletList = JSON.parse(oldRecords);
      return walletList.length + 1;
    } else {
      return 1;
    }
  }

  saveWallet() {
    debugger;
    const latestId = this.getNewWalletId();
    this.Wallet.id = latestId;
    this.Wallet.value = 0;
    this.Wallet.transactions = [];
    const oldRecords = localStorage.getItem('walletList');
    if (oldRecords !== null) {
      const walletList = JSON.parse(oldRecords);
      walletList.push(this.Wallet);
      localStorage.setItem('walletList', JSON.stringify(walletList));
    } else {
      const walletArr = [];
      walletArr.push(this.Wallet);
      localStorage.setItem('walletList', JSON.stringify(walletArr));
    }
    this.router.navigateByUrl('/walletList');
  }
}
