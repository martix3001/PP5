import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerFormComponent,CustomerListComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
    ],
  exports:[CustomerFormComponent]
})
export class InvoiceModule { }