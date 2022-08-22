import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-edit-user',
  template: `
    <h2 class="center">Editer </h2>
    <app-user-form *ngIf="user" [user]="user"></app-user-form>
  `,
})
export class EditUserComponent implements OnInit {


  user:User|undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //je récupère l'id depuis mon url
    const userId:string|null = this.route.snapshot.paramMap.get('id');
    //je vais chercher le pokémon associé
    if(userId) {
      this.userService.getUserById(+userId)
        .subscribe(user => this.user = user);
    }
    //s'il n'existe pas je mets undefined
    else {
      this.user = undefined;
    }
  }

}
