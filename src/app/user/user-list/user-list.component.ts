import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private userService:UserService, private router:Router) {

   }

  ngOnInit(): void {

      //on s'abonne à l'observable pour retourner notre liste
      this.userService.getUserList()
        .subscribe(userList => this.userList = userList);
      console.log(this.userList);

  }

  goToEditUser(user: User) {
    this.router.navigate(['/edit/user', user.id]);
  }
  goToUsersList() {
    this.router.navigate(['/users']);
  }
  deleteUser(user:User) {
    this.userService.deleteUserById(user.id)
    .subscribe(() => this.goToUsersList() );
    //on force le rafraichissement de la page après la suppression
    window.location.reload();
  }

}
