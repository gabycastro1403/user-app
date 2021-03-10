import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( private _transactionsService : TransactionsService) { }

  transactionsResponse: any[] = [];
  user:string = '';
  largeScreen: boolean = false;

  ngOnInit(): void {

    const widthScreen = screen.width;
    this.largeScreen =  widthScreen > 965? true : false;

    this._transactionsService.getTransactions()
    .then((response:any)=>{
      console.log('response',response)
      this.transactionsResponse = response.transactions;
    }).catch((error:any)=>{
      if(error.status === 400){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:  'Falta algo para mostrar las transacciones!',
        })
      }else if(error.status === 422){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:'Lo sentimos, la información no puede ser recuperada en este momento.'
        })
      }
    });
  

    this.user = this._transactionsService.userName;

  }


}
