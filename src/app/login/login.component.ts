import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message:string = "Vous êtes déconnecté";
  email:string;
  password:string;
  auth : LoginService;
  constructor(
    private authService: LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }
  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté'
    }else{
      this.message = "Identifiant ou mot de passe incorrect"
    }
  }
  login() {
    this.message = 'Tentative de connexion en cours';
    this.auth.login(this.email, this.password)
    .subscribe((isLoggedIn : boolean|unknown)=> {
      this.setMessage();
      if(isLoggedIn) {
        this.router.navigate(['/users']);
      }else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    })
  }
  logout(){
    this.auth.logout();
    this.message = 'Vous êtes déconnecté'
  }

}
