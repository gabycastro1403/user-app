import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( private _transactionsService : TransactionsService) { }

  transactionsResponse: any[] = [];
  user:string = '';

  ngOnInit(): void {

    this._transactionsService.getTransactions().then((response:any)=>{
      this.transactionsResponse = response.transactions;
    });
    this.user = this._transactionsService.userName;

  }

}
