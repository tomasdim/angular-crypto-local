import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { CoinService } from './services/coin.service';
import { RouterModule } from '@angular/router';
import { WalletListComponent } from './components/walletApp/wallet-list/wallet-list.component';
import { AddWalletComponent } from './components/walletApp/add-wallet/add-wallet.component';
import { EditWalletComponent } from './components/walletApp/edit-wallet/edit-wallet.component';
const routeArray = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'walletList',
    component: WalletListComponent,
  },
  {
    path: 'addWallet',
    component: AddWalletComponent,
  },
  {
    path: 'updateWallet/:id',
    component: EditWalletComponent,
  },
  {
    path: '',
    component: AddWalletComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponentComponent,
    WalletListComponent,
    AddWalletComponent,
    EditWalletComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeArray),
  ],
  providers: [CoinService],
  bootstrap: [AppComponent],
})
export class AppModule {}
