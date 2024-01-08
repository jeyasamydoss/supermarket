import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'aboutus', component: AboutusComponent },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }