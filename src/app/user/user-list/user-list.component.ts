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

}
