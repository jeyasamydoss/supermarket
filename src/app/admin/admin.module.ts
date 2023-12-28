import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule
],

  declarations: [AdminComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }