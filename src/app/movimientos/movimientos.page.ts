import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  movimientos = [
    { descripcion: 'Compra en tienda', fecha: new Date(), tipo: 'egreso', monto: 50000 },
    { descripcion: 'Pago Comision', fecha: new Date(), tipo: 'ingreso', monto: 100000 },
    { descripcion: 'Sueldo', fecha: new Date(), tipo: 'ingreso', monto: 500000 },
    { descripcion: 'Pago cuenta ', fecha: new Date(), tipo: 'egreso', monto: 20000 },
    { descripcion: 'Pago cuenta', fecha: new Date(), tipo: 'egreso', monto: 32000 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
