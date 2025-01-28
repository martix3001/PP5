import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { Routes } from '@angular/router';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListElementComponent } from './components/product-list-element/product-list-element.component';
import { ProductService } from './services/product.service';

const routes: Routes = [
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'invoice-form', component: InvoiceFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-form', component: ProductFormComponent },
]

@NgModule({
  declarations: [CustomerFormComponent,CustomerListComponent,CustomerListElementComponent,
                  InvoiceFormComponent,
                  ProductFormComponent,ProductListComponent,ProductListElementComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  exports:[CustomerFormComponent,CustomerListComponent],
  providers:[CustomerService,ProductService]
})
export class InvoiceModule { }