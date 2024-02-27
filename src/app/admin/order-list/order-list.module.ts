import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StatusComponent } from './status/status.component';
import { OrderListComponent } from './order-list.component';
import { OrderListRoutingModule } from './order-list.routing.module';
import { NgModule } from '@angular/core';
import { ShowOrderListComponent } from './show-order-list/show-order-list.component';


@NgModule({
declarations: [StatusComponent,OrderListComponent,ShowOrderListComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],

imports: [
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    OrderListRoutingModule
]
})
export class OrderListModule { }

