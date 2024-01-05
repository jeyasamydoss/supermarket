import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName:any;
  public password:any;
  constructor(private route:Router,private api:ApiService) { }

  ngOnInit() {
  }
  login(){
    let payload:any={};
    payload['userName']=this.userName;
    payload['password']=this.password;
    this.api.post('user/login',payload).subscribe((res)=>{
      if(res.role === "ROLE_USER"){
        this.route.navigate(['/user']);
      }else if(res.role === "ROLE_ADMIN"){
        this.route.navigate(['/admin'])
      }
      else{
        alert("User Not Found")
      }
    })


  }


}
