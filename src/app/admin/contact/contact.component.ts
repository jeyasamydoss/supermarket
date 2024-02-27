import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public productData: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'mobile', 'email', 'messages', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  getAllProduct() {
    this.api.get('api/contact-us').subscribe((res) => {
      this.productData = res; // Assuming res is an array of contact objects
      this.dataSource.data = this.productData; // Assign data to MatTableDataSource
    });
  }

  delete(id: any) {
    this.api.delete(`api/contact-us/${id}`).subscribe((res) => {
      console.log(res);
      this.getAllProduct(); // Refresh data after deletion
    });
  }
}
