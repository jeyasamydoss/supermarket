import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product-datatable',
  templateUrl: './product-datatable.component.html',
  styleUrls: ['./product-datatable.component.css']
})
export class ProductDatatableComponent implements OnInit {
  delete(id: any) {
    this.api.delete(`product/deleteById/${id}`).subscribe((res) => {
      console.log(res);
      this.getAllProduct();
    });
  }
  
  public productData: any[] = [];

  constructor(private route:Router,private router: ActivatedRoute,private api:ApiService) { }
  displayedColumns: string[] = ['id', 'name','price','categoryName','image', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getAllProduct();
  }
  add() {
    this.route.navigate(['add'], { relativeTo: this.router.parent });
  }
  getAllProduct() {
    this.api.get('product/getProductAll').subscribe((res) => {
      this.productData = res;
      this.dataSource.data= res;

    });
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }
  

}
