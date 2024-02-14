import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public categoryData: any[] = [];
  imageData: any;
  productName: any;
  price: any;
  categoryId: any;
  images: any;

  constructor(private service: ApiService,private route:Router) { }

  ngOnInit() {
    this.getAll();
  }

  // onFileSelected(event: any) {
  //   this.images = event.target.files[0];
  // }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
      this.imageData = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
        this.images = e.target.result;
    };

    reader.readAsDataURL(file);
}
  getAll() {
    this.service.get("category/getAllCategories").subscribe((res)=>{
      console.log("get Category All",res);
      this.categoryData=res;
    })  
  }

  remove() {
    this.images = null;
  }
  

  post() { 
    const data = new FormData();
    data.append("productName", this.productName);
    data.append("price", this.price);
    data.append("categoryIdStr", this.categoryId);
    data.append("images", this.imageData);

    this.service.post("product", data).subscribe((res) => {
      console.log(res);
      this.route.navigate(['admin/product'])

    });
  }

}
