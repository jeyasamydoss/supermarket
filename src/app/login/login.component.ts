import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: any;
  public password: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      
      if (user.role === 'ROLE_USER') {
        this.router.navigate(['']);
      } else if (user.role === 'ROLE_ADMIN') {
        this.router.navigate(['/admin']);
      }
    }
  }

  login() {
    let payload: any = {};
    payload['userName'] = this.userName;
    payload['password'] = this.password;
    
    this.api.post('user/login', payload).subscribe((res) => {
      if (res.role === 'ROLE_USER' || res.role === 'ROLE_ADMIN') {
        localStorage.setItem('user', JSON.stringify(res));
        
        if (res.role === 'ROLE_USER') {
          this.router.navigate(['']);
        } else if (res.role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin']);
        }
      } else {
        alert('User Not Found');
      }
    });
  }
}
