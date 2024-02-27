import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  orderItems: any;
id:any;
  constructor(private route:Router,private router: ActivatedRoute,private api:ApiService) { 
  this.id=  this.router.snapshot.queryParams['id'];
  }

  ngOnInit() {
    this.getOrderItems();  
  }

  getOrderItems() {
    this.api.get('order/getorderByOrderId/'+this.id).subscribe(
      (data: any) => {
        console.log('Order Items:', data);
        this.orderItems = data.orderStatus;
      },
      (error: any) => {
        console.error('Error fetching order items:', error);
      }
    );
  }

  updateOrderStatus(){

    let payload:any ={};
    payload['orderStatus'] = this.orderItems;
    this.api.put('order/getorderId/'+this.id,payload).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['admin/order-list']);
    })

  }

}
