import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-element',
  standalone: false,
  templateUrl: './product-list-element.component.html',
  styleUrl: './product-list-element.component.scss'
})
export class ProductListElementComponent {
  
  @Input() product: Product = new Product();  // Przekazanie klienta do komponentu
  @Output() deletedProductEvent = new EventEmitter<Product>();  // Zdarzenie do usunięcia klienta

  deleteProduct() {
    console.log("Usunięto klienta:", this.product.id);
    this.deletedProductEvent.emit(this.product);  // Emitowanie zdarzenia
  }
}
