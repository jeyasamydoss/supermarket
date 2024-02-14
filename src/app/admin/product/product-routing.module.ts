import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
import { ProductDatatableComponent } from './product-datatable/product-datatable.component';

const routes: Routes = [ {
    path: '',
    component: ProductComponent,   
    children: [
      {path:'add',component:AddComponent},
      {path:'',component:ProductDatatableComponent}
      
    ]
  }];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductRoutingModule { }



