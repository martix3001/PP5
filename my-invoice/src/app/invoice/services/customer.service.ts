import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient
  ) { }

  private customersList:Customer[]=[];
  private baseUrl: string = 'http://localhost:3000/customers'

  addCustomer(customer:Customer):Observable<any>{
    //this.customersList.push(customer);
    return this.httpClient
    .post<any>(this.baseUrl,customer)
    }

  getCustomers(): Observable<Customer[]> {
      return this.httpClient
        .get<Customer[]>(this.baseUrl)
        .pipe(
          map((customers: Customer[]) =>
            customers.map((customer) => 
              new Customer().deserialize(customer))
          )
        );
    }
    
    deleteCustomer(customer: Customer): Observable<any> {
      return this.httpClient.delete<any>(`${this.baseUrl}/${customer.id}`);
    }
    
  
  addInvoiceToCustomer(customerId: string, invoice: Invoice): Observable<any> {
    return this.httpClient.get<Customer[]>(this.baseUrl).pipe(
      map((customers: Customer[]) => {
        const customer = customers.find(cs => cs.id === customerId);
        if (customer) {
          customer.invoices.push(invoice); 
          return customer;
        } else {
          throw new Error('Klient nie znaleziony');
        }
      }),
      switchMap((updatedCustomer: Customer) => {
        return this.httpClient.put(`${this.baseUrl}/${customerId}`, updatedCustomer);
      })
    );
  }
}