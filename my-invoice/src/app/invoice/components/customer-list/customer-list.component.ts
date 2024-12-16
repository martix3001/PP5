import { Component } from '@angular/core';
<<<<<<< HEAD
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from "../../models/customer"
=======
>>>>>>> 65a456f3f1cf65835425f6a93d6af50b8c2c15d6

@Component({
  selector: 'app-customer-list',
  standalone:false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

<<<<<<< HEAD
  customerList: Customer[];

  constructor(
    private customerService:CustomerService,
    private router:Router
  ){
    console.log(this.customerService.getCustomer())
    this.customerList=this.customerService.getCustomer();
  }

  redirectToForm(){
    this.router.navigate(['invoice/customer-form'])
  }

}
=======
}
>>>>>>> 65a456f3f1cf65835425f6a93d6af50b8c2c15d6
