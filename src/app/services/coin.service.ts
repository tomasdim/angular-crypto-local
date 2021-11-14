import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coin } from '../interfaces/coin.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  searchCoins() {
    return this.http.get<Coin[]>(`${environment.baseUrlAPI}`);
  }
}
