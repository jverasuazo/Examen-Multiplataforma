import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SaldoPageRoutingModule } from './saldo-routing.module';

import { SaldoPage } from './saldo.page';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

const routes: Routes = [
  {
    path:'',
    component: SaldoPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports:[SaldoPage],
  declarations: [SaldoPage]
})

export class SaldoPageModule {}
