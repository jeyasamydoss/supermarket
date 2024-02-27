import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { TrackingComponent } from '../tracking/tracking.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    constructor(private api: ApiService,private dialog:MatDialog) { }
userId:any;
orderData:any[]=[];

  ngOnInit() {
    this.getUserOrder();


  }
  openPopup(trackId: string): void {
    const dialogRef = this.dialog.open(TrackingComponent, {
      width: '600px',
      height: '300px',
      data: { trackId: trackId } 
    });
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
