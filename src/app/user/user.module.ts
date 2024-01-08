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
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
],

  declarations: [UserComponent,UserHeaderComponent,MenuComponent,ProductComponent,ContactusComponent,AboutusComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }