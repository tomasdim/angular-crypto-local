import { Component, OnInit, Injectable } from '@angular/core';
import { Coin } from './interfaces/coin.interface';
import { CoinService } from './services/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
