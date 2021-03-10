import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactions : any = {
    "transactions": [{
        "id": 1,
        "description": "Payment 1",
        "amount": "56.58",
        "status": "active"
      },
      {
        "id": 2,
        "description": "Payment 2",
        "amount": "60.58",
        "status": "active"
      },
      {
        "id": 3,
        "description": "Payment 3",
        "amount": "0.58",
        "status": "active"
      }
  
    ]
  };
  
  constructor() {
   }
   userName : string = '';

   getTransactions() {
    return new Promise((resolve) => {
      resolve(this.transactions);
    })
    //uncomment this lines to test case reject
    /*return new Promise((resolve,reject) => {
      reject({status:400});
      reject({status:422});
    })*/
  }

  getUser(name:string){
    this.userName = name;
  }
}
