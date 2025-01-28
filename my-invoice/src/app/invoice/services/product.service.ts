import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3000/products'; 

  constructor(private httpClient: HttpClient) {}
 
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  deleteProduct(product: Product): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${product.id}`);
  }
}
