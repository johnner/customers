import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { MessageService} from "./message.service";
import { CUSTOMERS } from './mock-customers';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    this.messageService.add('CustomerService: customers fetched');
    return of(CUSTOMERS);
  }
}
