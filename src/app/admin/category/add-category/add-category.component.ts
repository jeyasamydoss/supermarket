import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service:ApiService,private route:Router, private rout:ActivatedRoute) { }



  add() {
this.post();
}

  
data:any;
  ngOnInit() {
  }

  oderForm=new FormGroup({
    name:new FormControl("",[Validators.required])
  });
get name(){
  return this.oderForm.get('name');
}

post(){

  this.service.post("category",this.oderForm.value).subscribe((res)=>{
    console.log("data Posted",res);
    this.data=res;
    this.goback();
    
  });

}
goback() {
  this.route.navigate(['back'], { relativeTo: this.rout.parent });
}
}
