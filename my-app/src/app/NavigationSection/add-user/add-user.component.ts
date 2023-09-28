import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: User = { id: 0, firstName: '', lastName: '', email: '', phone: '', role: '', password: '', createdDate: new Date(), lastUpdated: new Date(),active:false };
  confirmPassword: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {

    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    let lastUserId = 0;
    if (existingUsers.length > 0) {
      const lastUser = existingUsers[existingUsers.length - 1];
      lastUserId = lastUser.id;
    }

    const userToAdd: User = {
      id: lastUserId + 1,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      email: this.newUser.email,
      phone: this.newUser.phone,
      role: this.newUser.role,
      password: this.newUser.password,
      createdDate: new Date(),
      lastUpdated: new Date(),
      active:this.randomBoolean()
    };

    existingUsers.push(userToAdd);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    this.router.navigate(['/user-list']);

    this.newUser = { id: 0, firstName: '', lastName: '', email: '', phone: '', role: '', password: '', createdDate: new Date(), lastUpdated: new Date(),active:false };
    this.confirmPassword = '';

    alert('The user has been added successfully');
  }

  randomBoolean(): boolean {
    return Math.random() < 0.5; 
  }
  
}