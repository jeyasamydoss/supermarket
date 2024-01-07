import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}
  userName:any;
  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const user = JSON.parse(storedUser);
      this.userName = user.userName;
    
  }
}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
logout(){
  localStorage.removeItem('user');
  this.router.navigate([''])
}
}
