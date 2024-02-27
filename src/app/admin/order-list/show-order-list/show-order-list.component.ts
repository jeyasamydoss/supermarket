import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {  ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-show-order-list',
  templateUrl: './show-order-list.component.html',
  styleUrls: ['./show-order-list.component.css']
})
export class ShowOrderListComponent implements OnInit {

  orderItems: any[] = [];

  constructor(private route:Router,private router: ActivatedRoute,private api:ApiService) { }
  displayedColumns: string[] = ['S.No', 'firstName','trackId','createdAt','orderStatus','grantTotal', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  ngOnInit() {
    this.getOrderItems();
  }

  getOrderItems() {
    this.api.get('order/getorderAll').subscribe(
      (data: any) => {
        console.log('Order Items:', data);
        this.orderItems = data;
      },
      (error: any) => {
        console.error('Error fetching order items:', error);
      }
    );
  }
  status(id:any) {
    this.route.navigate(['status'],{ relativeTo: this.router.parent ,queryParams:{id:id}})
  }

 

}
