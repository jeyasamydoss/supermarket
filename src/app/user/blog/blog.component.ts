import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0,0);
    console.log("Scrolling to top");
  }
  

  foods:any[]=[
    {
      image:"/assets/salad veg.jpg",
      date:"Jan 2,2024",
      user:"Admin",
      heading:"Even the all-powerful Pointing has no control about the blind texts",
       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      image:"/assets/imag cutting.jpg",
      date:"Jan 2,2024",
      user:"Admin",
      heading:"Even the all-powerful Pointing has no control about the blind texts",
       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      image:"/assets/veg kitchan.jpg",
      date:"Jan 2,2024",
      user:"Admin",
      heading:"Even the all-powerful Pointing has no control about the blind texts",
       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      image:"/assets/tiger veg.jpg",
      date:"Jan 2,2024",
      user:"Admin",
      heading:"Even the all-powerful Pointing has no control about the blind texts",
       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      image:"/assets/veg saled1.jpeg",
      date:"Jan 2,2024",
      user:"Admin",
      heading:"Even the all-powerful Pointing has no control about the blind texts",
       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    }
  ];

}
