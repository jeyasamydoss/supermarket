import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      {path:'contact',component:ContactComponent},
      {path:'category',
      loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
      { path: 'product', 
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      { path: 'order-list', 
      loadChildren: () => import('./order-list/order-list.module').then(m => m.OrderListModule)},
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }