import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  template: `
    <h2 class="center">Ajouter un utilisateur</h2>
    <app-user-form [user]="user"></app-user-form>
  `,
})
export class AddUserComponent implements OnInit {
  user:User;
  ngOnInit(): void {
    this.user = new User();
  }

}
