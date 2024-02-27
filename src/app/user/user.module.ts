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
import { AddcartComponent } from './addcart/addcart.component';
import { BlogComponent } from './blog/blog.component';
import { OrderComponent } from './order/order.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog'; 
import { TrackingComponent } from './tracking/tracking.component';

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
    MatDividerModule,
    MatStepperModule,
    MatDialogModule
],

  declarations: [UserComponent,UserHeaderComponent,MenuComponent,
    ProductComponent,ContactusComponent,AboutusComponent,FooterComponent,BlogComponent,AddcartComponent,OrderComponent,TrackingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }