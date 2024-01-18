import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SnackbarServiceService } from '../common/snackbarService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  public userName: any;
  public password: any;
  public email: any;
  public mobile: any;

  constructor(private router: Router, private api: ApiService,private snackBar:SnackbarServiceService) { }

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
    if (!this.userName) {
      this.snackBar.showErrorMessage("User Name Required");
      return; 
    }
  
    if (!this.password) {
      this.snackBar.showErrorMessage("Password Required");
      return; 
    }
  
    let payload: any = {
      userName: this.userName,
      password: this.password
    };
  
    this.api.post('user/login', payload).subscribe(
      (res) => {
        if (res.role === 'ROLE_USER' || res.role === 'ROLE_ADMIN') {
          localStorage.setItem('user', JSON.stringify(res));
  
          if (res.role === 'ROLE_USER') {
            this.snackBar.showSuccessMessage('Welcome to ' + res.userName);
            this.router.navigate(['']);
          } else if (res.role === 'ROLE_ADMIN') {
            this.snackBar.showSuccessMessage('Welcome to Admin ' + res.userName);
            this.router.navigate(['/admin']);
          }
        }
      },
      (error) => {
        if (error.status === 401) {
          this.snackBar.showErrorMessage("User not found or incorrect password");
        } else {
          alert('An unexpected error occurred');
        }
      }
    );
  }
  
  
  register() {
    let payload: any = {};
    payload['userName'] = this.userName;
    payload['password'] = this.password;
    payload['email'] = this.email;
    payload['mobile'] = this.mobile;
    payload['role'] = "ROLE_USER"
    this.api.post('user', payload).subscribe((res) => {
      this.getLogin();

    },
    (error) => {
        this.snackBar.showSuccessMessage(error);
    });

  }
  goHome() {
    this.router.navigate(['']);
  }
  getLogin() {
    this.title = 'login';
    this.userName = null;
    this.password = null;
  }
  getRegister() {
    this.title = 'register';
  }
}
