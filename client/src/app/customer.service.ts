import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService} from "./message.service";
import { CUSTOMERS } from './mock-customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'api/customers';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError('getCusomers', []))
      );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this
      .http.get<Customer>(url).pipe(
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }
}
