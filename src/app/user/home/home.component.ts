import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (user.role === 'ROLE_USER') {
        this.route.navigate(['']);
      } else if (user.role === 'ROLE_ADMIN') {
        this.route.navigate(['/admin']);
      }
    }
  }


}
