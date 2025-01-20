import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Invoice } from '../../models/invoice'; 
import { Tax } from '../../models/tax';  
import { CustomerService } from '../../services/customer.service';  

@Component({
  selector: 'app-invoice-form',
  standalone: false,
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = new Invoice('', 0);
  taxRates: Tax[] = [
    new Tax(23, '23% VAT'),
    new Tax(8, '8% VAT'),
    new Tax(5, '5% VAT'),
    new Tax(0, 'Brak VAT')
  ]; 
  customerId: string = ''

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId')!;
  }

  
  calculateBrutto() {
    if (this.invoice.netto && this.invoice.tax) {
      const taxAmount = this.invoice.tax.calculateTax(this.invoice.netto);
      this.invoice.brutto = this.invoice.netto + taxAmount;
    }
  }

  
  onSubmitInvoice(form: NgForm) {
    if (form.valid) {
      console.log(this.invoice);
      
      this.customerService.addInvoiceToCustomer(this.customerId, this.invoice).subscribe(response => {
        console.log('Faktura zapisana', response);
        this.router.navigate(['/invoice/customer-list']);  
      });
    } else {
      console.error('Formularz nie jest prawidłowy!');
    }
  }
}
