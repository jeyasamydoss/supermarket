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

  constructor(private api:ApiService,private routes:ActivatedRoute) {
this.id  = this.routes.snapshot.queryParams['id'];
   }

  ngOnInit() {
    this.getAllProduct();
    console.log(this.id)

  }


  getAllProduct(){

    this.api.get("product/getProductAll").subscribe((res)=>{
      this.productData=res;
    })
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }




}
