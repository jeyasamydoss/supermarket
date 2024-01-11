import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcartComponent } from './addcart/addcart.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full'
      },
      { path: 'product', component: ProductComponent },
      { path: 'contactus', component: ContactusComponent },
      {path:'',component:HomeComponent},
      { path: 'aboutus', component: AboutusComponent },
      { path: 'addcart', component: AddcartComponent },


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }