import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { UserHeaderComponent } from './user-header/user-header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddcartComponent } from './addcart/addcart.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
],

  declarations: [UserComponent,UserHeaderComponent,MenuComponent,
    ProductComponent,ContactusComponent,AboutusComponent,FooterComponent,BlogComponent,AddcartComponent,CheckoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }