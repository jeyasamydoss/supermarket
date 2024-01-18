import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkForm =new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    landmark:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    mobile:new FormControl("",[Validators.required]),
    pin:new FormControl("",[Validators.required]),
  })
  get fname(){
    return this.checkForm.get('fname');
  }
  get lname(){
    return this.checkForm.get('lname');
  }
  get landmark(){
    return this.checkForm.get('landmark');
  }
  get address(){
    return this.checkForm.get('address');
  }
  get email(){
    return this.checkForm.get('email');
  }
  get mobile(){
    return this.checkForm.get('mobile');
  }
  get pin(){
    return this.checkForm.get('pin');
  }

}
