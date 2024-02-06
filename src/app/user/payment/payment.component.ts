import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  options = [
    { title: 'Option 1', content: 'Content for option 1' },
    { title: 'Option 2', content: 'Content for option 2' },
    // ... more options
  ];
  selectedOption: string = 'option1'; // Initial selected option

  onRadioChange(event: MatRadioChange) {
    this.selectedOption = event.value;
  }

  constructor(private dialog: MatDialogRef<PaymentComponent>) { }



  // Method to close the dialog
  closeDialog(): void {
    this.dialog.close();
  }

  ngOnInit() {
  }

}
