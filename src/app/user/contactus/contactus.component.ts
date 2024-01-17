import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private service:ApiService) { }
data:any;
  ngOnInit() {
  }
  gotoadmin() {
this.post();
  }
contact=new FormGroup({
  name:new FormControl,
  email:new FormControl,
  subject:new FormControl,
  message:new FormControl
})
post(){
  this.service.post("api/contact-us",this.contact.value).subscribe((res)=>{
this.data=res;
console.log("query sended",res);
this.contact.reset();
  })
}

}
