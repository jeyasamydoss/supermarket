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
  ]

  constructor() { }

  ngOnInit() {
  }

}
