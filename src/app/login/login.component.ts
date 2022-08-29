import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  email:'';
  password:'';
  wrongCredentials=false;
  auth : LoginService;
  constructor(
    private authService: LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    this.wrongCredentials = false;
    this.authService.login(this.email, this.password).subscribe(result => {
      this.router.navigate(['/users']);
    },error => {
      this.wrongCredentials = true;
    });
  }


}
