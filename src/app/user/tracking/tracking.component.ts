import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  trackId: any;
  cartItems: any[] = [];
  activeStepIndex: number = 0;
  status: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private dialog: MatDialogRef<TrackingComponent>,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.trackId = this.data.trackId;
    this.getOrderStatus();
  }

  close() {
    this.dialog.close();
  }

  getOrderStatus() {
    this.api.get('order/getorderByTrackId/' + this.trackId).subscribe(
      (data) => {
        console.log('Cart Items:', data);
        this.cartItems = data;
        this.setActiveStep();
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  setActiveStep() {
    const orderStatus = this.cartItems[0].orderStatus;
    switch (orderStatus) {
      case 'ORDERED':
        this.activeStepIndex = 0;
        this.status = "Successfully ordered";
        break;
      case 'PROCESS':
        this.activeStepIndex = 1;
        this.status = "Order will be coming soon";
        break;
      case 'DELIVERED':
        this.activeStepIndex = 2;
        this.status = "Order successfully delivered";
        break;
      case 'REJECTED':
        this.activeStepIndex = 3;
        this.status = " Order rejected by customer";
        break;
      default:
        this.activeStepIndex = 0;
        this.status = "Successfully ordered";

    }
  }
}
