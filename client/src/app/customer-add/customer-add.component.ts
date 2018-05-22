import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.less']
})
export class CustomerAddComponent implements OnInit {
  public customer: Customer;

  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.customer = new Customer();
    this.customer.name = { first: '', last: '' };
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.validate()) return;
    this.customerService
      .addCustomer(this.customer)
      .subscribe(() => this.goBack());
  }

  validate(): boolean {
    return !!(this.customer.name &&
              this.customer.name.first &&
              this.customer.name.last);
  }

}
