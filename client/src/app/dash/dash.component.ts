import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService} from "../customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash.component.html',
  styleUrls: [ './dash.component.less' ]
})
export class DashComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe(customers => this.customers = customers.slice(0, 4));
  }
}
