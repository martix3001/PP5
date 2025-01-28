import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Invoice } from '../../models/invoice';
import { Tax } from '../../models/tax';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-invoice-form',
  standalone: false,
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = new Invoice('', 0);
  products: Product[] = [];
  taxRates: Tax[] = [
    new Tax(23, '23% VAT'),
    new Tax(8, '8% VAT'),
    new Tax(5, '5% VAT'),
    new Tax(0, 'Brak VAT')
  ]; 
  customerId: string = '';

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId')!;
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Błąd podczas ładowania produktów', error);
      }
    );
  }

  onProductSelect(event: Event) {
    const productId = (event.target as HTMLSelectElement).value;
    const selectedProduct = this.products.find(product => product.id === productId);
  
    if (selectedProduct) {
      this.invoice.name = selectedProduct.name;
      this.invoice.netto = Number(selectedProduct.price);
      this.calculateBrutto();
    }
  }
  

  calculateBrutto() {
    if (this.invoice.netto && this.invoice.tax) {
      const taxAmount = this.invoice.tax.calculateTax(this.invoice.netto * this.invoice.quantity);
      this.invoice.brutto = this.invoice.netto * this.invoice.quantity + taxAmount;
    }
  }

  onSubmitInvoice(form: NgForm) {
    if (form.valid) {
      this.customerService.addInvoiceToCustomer(this.customerId, this.invoice).subscribe(
        response => {
          console.log('Faktura zapisana', response);
          this.router.navigate(['/invoice/customer-list']);
        },
        error => {
          console.error('Błąd przy zapisywaniu faktury', error);
        }
      );
    } else {
      console.error('Formularz nie jest prawidłowy!');
    }
  }
}
