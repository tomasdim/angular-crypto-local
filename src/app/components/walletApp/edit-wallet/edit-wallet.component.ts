import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from '@app/interfaces/wallet.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss'],
})
export class EditWalletComponent implements OnInit {
  Wallet: Wallet;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.Wallet = new Wallet();
    this.route.queryParams.subscribe((res) => {
      this.Wallet.id = res[''];
    });
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('walletList');
    if (oldRecords !== null) {
      const walletList = JSON.parse(oldRecords);
      const currentWallet = walletList.find((m: any) => m.id == this.Wallet.id);
      if (currentWallet !== undefined) {
        this.Wallet.name = currentWallet.name;
        this.Wallet.value = currentWallet.value;
        this.Wallet.transactions = currentWallet.transactions;
      }
    }
  }

  updateWallet() {
    debugger;
    const oldRecords = localStorage.getItem('walletList');
    if (oldRecords !== null) {
      const walletList = JSON.parse(oldRecords);
      walletList.splice(
        walletList.findIndex((a: any) => a.id == this.Wallet.id),
        1
      );
      this.Wallet.value = 0;
      this.Wallet.transactions = [];
      walletList.push(this.Wallet);
      localStorage.setItem('walletList', JSON.stringify(walletList));
    }
    this.router.navigateByUrl('/walletList');
  }
}
