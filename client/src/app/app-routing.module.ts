import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomersTableComponent } from "./customers-table/customers-table.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersTableComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'add', component: CustomerAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
