import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product-list',
  standalone:false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy{
  navigateToProductForm() {
    this.router.navigate(['/invoice/product-form']);
  }

  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private router:Router
  ){
    this.loadProducts()
  }
  ngOnInit(){
    this.loadProducts();
  }
  ngOnDestroy(){
    console.log('zamykam komponent')
  }

  deletedProduct(product: Product) {
    console.log('Usuwanie productu', product);
    this.productService.deleteProduct(product).subscribe(
      () => {
        this.productList = this.productList.filter(p => p.id !== product.id);
        console.log('Product usunięty');
      },
      (error) => {
        console.error('Błąd przy usuwaniu', error);
      }
    );
  }

  loadProducts() {
    this.productService.getProducts()
      .subscribe((data: any[]) => {
        // Mapowanie obiektów na instancje klasy Product
        this.productList = data.map(item => {
          const product = new Product();
          product.id = item.id;
          product.name = item.name;
          product.price = item.price;
          return product;
        });
        console.log(this.productList);
      });
  }
  
}
