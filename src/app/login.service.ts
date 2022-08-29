import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LOGIN_URL = 'http://localhost:8000/api/login';
  LOGOUT_URL = '';
  isLoggedIn:boolean = false;
  constructor(
    private httpClient: HttpClient,

  ) { }

  login(email:string, password:string){
    const loginData = {
      email:email,
      password: password,
    };
    return new Observable<boolean>((observer)=> {
      this.httpClient.post(this.LOGIN_URL, loginData).subscribe(result=>{
        observer.next(true);
        observer.complete();
        this.isLoggedIn = true;
        console.log(JSON.stringify(result));
        localStorage.setItem('user', JSON.stringify(result));
      }, error => {
        observer.error(false);
        observer.complete();
        this.isLoggedIn = false;
      })
    })
  }
}

