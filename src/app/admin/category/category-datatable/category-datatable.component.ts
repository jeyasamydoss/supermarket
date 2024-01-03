import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category-datatable',
  templateUrl: './category-datatable.component.html',
  styleUrls: ['./category-datatable.component.css']
})
export class CategoryDatatableComponent implements OnInit {

  constructor(private service:ApiService, private route:Router, private router: ActivatedRoute,private _liveAnnouncer: LiveAnnouncer) { }
  public categoryData:any[]=[];
  ngOnInit() {
   this.getAll();
  }

  getAll(){

    this.service.get("category/getAllCategories").subscribe((res)=>{
      console.log("get Category All",res);
      this.categoryData=res;
      this.dataSource= res;
    })
  }
  add() {
    this.route.navigate(['addCategory'], { relativeTo: this.router.parent });
  }
  gotoedit() {
    this.route.navigate(['editCategory'], { relativeTo: this.router.parent });
  }
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
id:number,
name:string
}


