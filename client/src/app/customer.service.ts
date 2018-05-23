import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      );
  }

  updateCustomer(customer: Customer): Observable<any> {
    const url = `${this.customersUrl}/${customer.customerID}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, customer, httpOptions).pipe(
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<any>('createCustomer'))
    );
  }

  deleteCustomer (customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.customerID;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url).pipe(
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }
}
