import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from "../../models/customer"

@Component({
  selector: 'app-customer-list',
  standalone:false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy{
  navigateToForm() {
    this.router.navigate(['/invoice/customer-form']);
  }

  customerList: Customer[] = [];
 

  constructor(
    private customerService:CustomerService,
    private router:Router
  ){
    this.loadCustomers()
  }
  ngOnInit(){
    this.loadCustomers();
  }
  ngOnDestroy(){
    console.log('zamykam komponent')
  }

  deletedCustomer(customer: Customer) {
    console.log('Usuwanie klienta', customer);
    this.customerService.deleteCustomer(customer).subscribe(
      () => {
        this.customerList = this.customerList.filter(c => c.id !== customer.id);
        console.log('Klient usunięty');
      },
      (error) => {
        console.error('Błąd przy usuwaniu klienta', error);
      }
    );
  }

  loadCustomers(){
    this.customerService.getCustomers()
      .subscribe((data: Customer[]) =>{
        this.customerList = data as Customer[];
        console.log(data);
    })
  }

}
