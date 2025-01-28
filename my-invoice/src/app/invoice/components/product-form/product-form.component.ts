import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone:false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  product: Product = new Product();

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/invoice/product-list']);
      });
    } else {
      console.error('Formularz jest nieprawidłowy');
    }
  }
}
