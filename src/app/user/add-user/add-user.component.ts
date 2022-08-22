import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `
    <h2 class="center">Ajouer un utilisateur</h2>
    <app-user-form></app-user-form>
  `,
})
export class AddUserComponent implements OnInit {

  ngOnInit(): void {

  }

}
