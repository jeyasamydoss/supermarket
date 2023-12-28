import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
],

  declarations: [UserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }