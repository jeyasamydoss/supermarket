import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productData:any[]=[];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getAllProduct();

  }


  getAllProduct(){

    this.api.get("product/getProductAll").subscribe((res)=>{
      console.log("get Product ALL",res);
      this.productData=res;
    })
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }




}
