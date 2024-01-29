import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // public cartItemCount: number = 0;
  private cartUpdateSubscription: Subscription;
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

    // this.cartItemCount = this.api.cartItemCount;
    console.log('Cart updated');
    // this.cartUpdateSubscription = this.api.cartUpdated$.subscribe(() => {
      // console.log('Cart updated');
      // this.cartItemCount = this.api.cartItemCount; 
    // });

  }
  gotohome() {
    this.router.navigate(['home']);
  }
  logout(){
    localStorage.removeItem('user');
    this.userName = null;
  }
  login(){
    this.router.navigate(['login']);
  }
}
