import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.less']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
