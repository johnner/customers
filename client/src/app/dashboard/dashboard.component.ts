import { Component } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  customers: Customer[] = [];

  constructor(private service: CustomerService, private router: Router) {}

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

  edit(customer: Customer): void {
    this.router.navigate([`customers/${customer.customerID}`]);
  }
}
