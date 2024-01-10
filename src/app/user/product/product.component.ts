import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productData:any[]=[];

  id:any;
categoryTitle:any;
  constructor(private api:ApiService,private routes:ActivatedRoute) {
this.id  = this.routes.snapshot.queryParams['id'];
   }

  ngOnInit() {
    if(this.id){
    this.getProductByCategoryId()
    }else{
      this.getAllProduct();
    }
  }


  getAllProduct(){
    this.api.get('product/getProductAll').subscribe((res)=>{
      this.productData=res;
    })
  }
  getCategoryId(){
    this.api.get("category/getByCategoryId/"+this.id).subscribe((res)=>{
      this.categoryTitle=res.name;
    })
  }

  getProductByCategoryId(){
    this.getCategoryId();
    this.api.get("product/getByCategoryId/"+this.id).subscribe((res)=>{
      this.productData=res;
    })
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }




}
