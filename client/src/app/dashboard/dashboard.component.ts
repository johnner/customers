import { Component } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  customers: Customer[] = [];

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.service.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  remove(customer: Customer): void {
    this.customers = this.customers.filter(c => c !== customer );
    this.service.deleteCustomer(customer).subscribe();
  }
}
