import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }
  userName:any;
  public categoryList:any[]=[];
  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const user = JSON.parse(storedUser);
      this.userName = user.userName;


    }

    this.getCategory();
  }
  getCategory(){
    this.api.get('category/getAllCategories').subscribe((res)=>{
      console.log(res);
      this.categoryList = res;
    })

  }
  logout(){
    localStorage.removeItem('user');
    this.userName = null;
  }
  login(){
    this.router.navigate(['login']);
  }
}
