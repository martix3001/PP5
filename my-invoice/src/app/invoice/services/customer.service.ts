import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customersList:Customer[]=[];

  addCustomer(customer:Customer):void{
    this.customersList.push(customer);
    }

  getCustomer():Customer[]{
    return this.customersList;
  }

}