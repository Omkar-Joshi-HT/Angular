import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './MainSection/delete-user/delete-user.component';
import { EditUserComponent } from './MainSection/edit-user/edit-user.component';
import { TotalUsersComponent } from './MainSection/total-users/total-users.component';
import { UserListComponent } from './MainSection/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'total-users', component: TotalUsersComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }