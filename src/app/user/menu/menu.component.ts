import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  imageData = [
    {
      imagePath: '../../../assets/vegetable2.jpg'
    },
    {
      imagePath: '../../../assets/vegetable3.jpg'
    }, {
      imagePath: '../../../assets/vegetable4.jpg'
    },
    {
      imagePath: '../../../assets/vegetable6.jpg'
    }
   
  ]

  ngOnInit() {
    console.log("image array ",this.imageData)
  }

}
