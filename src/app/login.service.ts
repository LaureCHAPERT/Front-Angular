import { HttpClient } from '@angular/common/http';
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

  login(pEMail:any, pPassword:any): Observable<boolean|unknown> {
    const loginData = {
      pEmail : pEMail,
      pPassword: pPassword
    }

    return this.httpClient.post(this.LOGIN_URL, loginData).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,[]))
    )
  }

  logout(){
    this.isLoggedIn = false;
  }
  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);

    return of (errorValue);
  }
}

