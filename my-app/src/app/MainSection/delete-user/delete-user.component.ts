import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userToDelete: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userToDelete = {};
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userToDeleteData = params.get('userToDelete');
      if (userToDeleteData) {
        this.userToDelete = JSON.parse(userToDeleteData);
      }
    });
  }

  confirmDelete(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: any[] = JSON.parse(storedUsers);

      const userIndex = users.findIndex(u => u.id === this.userToDelete.id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);

        localStorage.setItem('users', JSON.stringify(users));

        console.log('User Deleted:', this.userToDelete);
        this.router.navigate(['/user-list']);
      } else {
        console.error('User not found:', this.userToDelete);
        this.router.navigate(['/user-list']);
      }
    }
  }

  cancelDelete(): void {
    this.router.navigate(['/user-list']);
  }
}