import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-element',
  standalone: false,
  templateUrl: './customer-list-element.component.html',
  styleUrls: ['./customer-list-element.component.scss']
})
export class CustomerListElementComponent {
  isExpanded: boolean = false;

  @Input() customer: Customer = new Customer();  
  @Output() deletedCustomerEvent = new EventEmitter<Customer>();  

  deleteCustomer() {
    console.log("Usunięto klienta:", this.customer.nip);
    this.deletedCustomerEvent.emit(this.customer); 
  }

  toggleInvoices() {
    this.isExpanded = !this.isExpanded; 
  }

}
