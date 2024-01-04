import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id: number;
  

  constructor(private service: ApiService, private route: Router, private routes: ActivatedRoute) {

    this.id = this.routes.snapshot.queryParams['id'];
  }
  oderForm = new FormGroup({
    name: new FormControl("", [Validators.required])
  });
  get name() {
    return this.oderForm.get('name');
  }
  ngOnInit() {
    this.getCategoryById();

    console.log(this.id);
  }
  getCategoryById() {
    this.service.getid("category/getByCategoryId/"+this.id).subscribe((res) => {
      this.oderForm.patchValue(res);
    });
  }
  add() {
    this.edit();
    this.goback();
  }
  goback() {
    this.route.navigate(['back'], { relativeTo: this.routes.parent });
  }
  edit() {
    this.service.put("category/updateByCategory/" + this.id, this.oderForm.value).subscribe((res) => {
      console.log("data Updated", res);
      this.oderForm = res;


    })
  }


}
