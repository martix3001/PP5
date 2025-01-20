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

const routes: Routes = [
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'invoice-form', component: InvoiceFormComponent },
]

@NgModule({
  declarations: [CustomerFormComponent,CustomerListComponent, CustomerListElementComponent,InvoiceFormComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  exports:[CustomerFormComponent,CustomerListComponent],
  providers:[CustomerService]
})
export class InvoiceModule { }