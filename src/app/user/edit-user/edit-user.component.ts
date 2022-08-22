import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-user',
  template: `
    <h2 class="center">Editer </h2>
    <app-user-form></app-user-form>
  `,
})
export class EditUserComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit(): void {

  }

}
