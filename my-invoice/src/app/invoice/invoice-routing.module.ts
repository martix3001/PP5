import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component'; 
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'invoice-form/:customerId', component: InvoiceFormComponent }, 
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-form', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
