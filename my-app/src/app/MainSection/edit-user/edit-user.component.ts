import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editedUser: any;
  userToEdit: any;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.editedUser = {}; 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userToEditStr = params.get('userToEdit');
      if (userToEditStr) {
        this.userToEdit = JSON.parse(userToEditStr);
        this.editedUser = { ...this.userToEdit };
      }
    });
  }

  onSubmit(): void {
    
    this.updateUserInLocalStorage(this.editedUser);

    this.router.navigate(['/user-list']);
    alert("The user has been updated successfully");  
  }

  onCancel(): void {
    this.router.navigate(['/user-list']);
  }

  private updateUserInLocalStorage(updatedUser: any): void {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = storedUsers.findIndex((user: any) => user.id === updatedUser.id);

    if (userIndex !== -1) {
      storedUsers[userIndex] = updatedUser;

      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
  }
}