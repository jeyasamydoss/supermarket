import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { UserHeaderComponent } from './user-header/user-header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    MatIconModule
],

  declarations: [UserComponent,UserHeaderComponent,MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }