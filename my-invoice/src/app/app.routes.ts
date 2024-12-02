import { Routes } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { Invoice } from './invoice/models/invoice';

export const routes: Routes = [

        {path: 'product-form',component: ProductFormComponent},
        {path:'invoice',
            loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
        }
];
