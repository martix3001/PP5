import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { Invoice } from './invoice/models/invoice';
import { NgModule } from '@angular/core';

export const routes: Routes = [

        {path:'invoice',
            loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
        }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }