import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { CoinService } from './services/coin.service';
import { RouterModule } from '@angular/router';

const routeArray = [
  {
    path: 'header',
    component: HeaderComponent,
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeArray),
  ],
  providers: [CoinService],
  bootstrap: [AppComponent],
})
export class AppModule {}
