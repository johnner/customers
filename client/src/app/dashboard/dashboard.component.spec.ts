
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { Customer } from "../customer";
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule,
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatGridTile } from '@angular/material';
import {CustomerService} from "../customer.service";


class MockCustomerService {
  customers: Customer[] = [];
  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
  deleteCustomer(): Observable<Customer> {
    return of();
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardComponent,
        { provide: CustomerService, useClass: MockCustomerService }
      ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatGridTile
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
