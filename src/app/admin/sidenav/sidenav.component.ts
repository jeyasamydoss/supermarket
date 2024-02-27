import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sideMenu = [
    {
      path: '/admin/home',
      icon: 'home',
      name: 'Home'
    },
    {
      path: '/admin/dashboard',
      icon: 'dashboard',
      name: 'Dashboard'
    },
    {
      path: '/admin/category',
      icon: 'equalizer',
      name: 'Category'
    },
    {
      path: '/admin/product',
      icon: 'shop',
      name: 'Product'
    },
    {
      path: '/admin/contact',
      icon: ' contact_phone',
      name: 'Contact'
    },
    {
      path: '/admin/order-list',
      icon: ' order',
      name: 'Order'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
