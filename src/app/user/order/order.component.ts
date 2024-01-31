import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private api: ApiService) { }
userId:any;
orderData:any[]=[];

  ngOnInit() {
    this.getUserOrder();


  }
  getUserOrder() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userId = user.id;
    }
    this.api.get('order/getorderByUserId/'+ this.userId ).subscribe((res)=>{
      console.log(res);
      this.orderData = res;
      
    })

  }

  getImage(image:any){

    return `http://localhost:8080/${image}`;

  }
  
}
