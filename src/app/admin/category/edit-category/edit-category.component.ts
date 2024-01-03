import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private service:ApiService,private route:Router) { }
id:number;
data:any;
  ngOnInit() {
    this.service.put("category/updateByCategory/{id}",this.data).subscribe((res)=>{
      this.data=res;
      console.log("data Updated",res);
      
    })
  }

 
}
