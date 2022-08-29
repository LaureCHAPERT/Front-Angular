import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ){}
  canActivate() : boolean{
    if(this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }

}