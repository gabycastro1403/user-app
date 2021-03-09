import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string = '';

  constructor(private _transactionsService : TransactionsService) {
    
   }

  ngOnInit(): void {
  }

  save(){
    this._transactionsService.getUser(this.name);
  }

}
