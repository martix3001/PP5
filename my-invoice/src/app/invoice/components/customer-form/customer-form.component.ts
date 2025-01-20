import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone:false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
 constructor
 (
  private customerService: CustomerService,
  private router: Router
 ){}

 navigateToList() {
  this.router.navigate(['/invoice/customer-list']);
}
 customer: Customer = new Customer();
 
onSubmitForm(form: NgForm) {
    console.log(form);
    console.log(form.valid);
    console.log(this.customer);
    if(form.valid){
      this.customerService.addCustomer(this.customer)
      .subscribe((result: Customer) => {
        console.log(result)
        console.log('zapisalem')
        this.router.navigate(['/invoice/customer-list']);
      })
      
    }else{
      console.error("Popraw formularz")
    }
}

  

  

  //testVaiable:Supplier=new Supplier('sasas')

}