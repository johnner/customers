import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  onSelect(customer: Customer) {
    this.selectedCustomer = customer;
  }

  getCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
