import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.css']
})
export class TotalUsersComponent implements OnInit{
  users: any[] = [];
  ActiveUser: any[] = [];
  InActiveUser: any[]=[];
  totalUsers: number = 0;
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  
  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.ActiveUser = this.users;
      this.InActiveUser = this.users;
      this.totalUsers = this.users.length;

      this.ActiveUser = this.ActiveUser.filter(user => user.active);
      this.activeUsers = this.ActiveUser.length;


      this.InActiveUser = this.InActiveUser.filter(user => !user.active);
      this.inactiveUsers = this.InActiveUser.length;


    }
  }
}
