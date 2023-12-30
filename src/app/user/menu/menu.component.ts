import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory(){
    this.api.get('category/getAllCategories').subscribe((res)=>{
      console.log(res);
    })

  }

}
