import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryDatatableComponent } from './category-datatable/category-datatable.component';
import { CategoryModule } from './category.module';


const adminRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent,   
    children: [
      {path:'addCategory',component:AddCategoryComponent},
      {path:'',component:CategoryDatatableComponent},
      {path:'editCategory',component:EditCategoryComponent},
      {path:'back',redirectTo:'',pathMatch: 'full'}      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }