import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string = '';
  largeScreen :boolean = false;

  constructor(private _transactionsService : TransactionsService) {
    
   }

  ngOnInit(): void {
    const widthScreen = screen.width;
    this.largeScreen =  widthScreen > 965? true : false;
  }

  save(){
    this._transactionsService.getUser(this.name);
  }

}
