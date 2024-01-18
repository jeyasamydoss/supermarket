import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  gotocheckout() {
this.route.navigate(['checkout']);
  }

}
