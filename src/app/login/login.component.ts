import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  message:string = "Vous êtes déconnecté";
  name:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

}
