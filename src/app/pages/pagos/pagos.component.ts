import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})

export class PagosComponent implements OnInit {

  constructor() {
    
  

  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['creado','item', 'cost'];
  transactions: Transaction[] = [
    {creado: '10/06/2020' , item: 'Estacionamiento de Carlos#998', cost: 4},
    {creado: '25/08/2020' ,item: 'Estacionamiento de Luis#7780', cost: 5},
    {creado: '07/02/2021' ,item: 'Estacionamiento de Soila#997', cost: 2},
    {creado: '16/04/2021' ,item: 'Estacionamiento de Juan#668', cost: 4},

  ];

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  
}
interface Transaction {
  creado: string;
  item: string;
  cost: number;
}
