import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const userRoutes: Routes = [
  { path: 'edit/user/:id', component: EditUserComponent},
  { path: 'user/add', component:AddUserComponent},
  { path: 'users', component: UserListComponent },



]

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [UserService],
})
export class UserModule { }
