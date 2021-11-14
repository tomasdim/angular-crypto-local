import { Component, OnInit } from '@angular/core';
import { Coin } from '@app/interfaces/coin.interface';
import { CoinService } from '@app/services/coin.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  coins: Coin[] = [];

  constructor(private coinSvc: CoinService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.coinSvc.searchCoins().subscribe((res: any) => {
      console.log('Response =>', res);
      this.coins = res;
    });
  }
}
