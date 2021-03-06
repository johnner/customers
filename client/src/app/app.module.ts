import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule,
         MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
         MatTableModule, MatPaginatorModule, MatSortModule, MatGridTile } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerAddComponent,
    NavComponent,
    DashboardComponent,
    CustomersTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridTile
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
