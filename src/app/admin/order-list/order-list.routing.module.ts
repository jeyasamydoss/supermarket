import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list.component';
import { StatusComponent } from './status/status.component';
import { ShowOrderListComponent } from './show-order-list/show-order-list.component';

const routes: Routes = [ {
    path: '',
    component: OrderListComponent,   
    children: [
      {path:'status',component:StatusComponent},
      {path:'',component:ShowOrderListComponent}
      
    ]
  }];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class OrderListRoutingModule { }



