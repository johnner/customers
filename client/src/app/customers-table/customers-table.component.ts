import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CustomersTableDataSource } from './customers-table-datasource';
import { CustomerService } from "../customer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.less']
})
export class CustomersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CustomersTableDataSource;
  constructor(private service: CustomerService, private router: Router) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'customerID',
    'first',
    'last',
    'birthday',
    'gender',
    'lastContact',
    'customerLifetimeValue'
  ];

  ngOnInit() {
    this.dataSource = new CustomersTableDataSource(this.paginator, this.sort, this.service);
  }

  selectRow(row) {
    this.router.navigate([`customers/${row.customerID}`]);
  }
}
