import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { catchError, Observable,of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

  getUserList(): Observable<User[]>{
    /* return USER;
    la réponse contiendra un tableau
    en param on passe une URL
    avec pipe on passe les traitements que l'on veut faire
      on log le user
      si y'a une erreur on log l'erreur et on retourne un [] vide
      pour éviter le crash de l'appli*/
      //tap = console.log pour un Observable
    return this.http.get<User[]>('http://localhost:8000/api/user').pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,[]))
      )
  }
  //quand on n'a pas d'utilisateur on renvoie undefined
  getUserById(userId:number): Observable<User|undefined> {
    return this.http.get<User>(`http://localhost:8000/api/user/${userId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,undefined))
      );
  }
  getUserRoles():string[]{
    return [
       'ROLE_ADMIN',
       'ROLE_USER',
    ];
  }
  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);

    return of (errorValue);
  }
  addUser(user:User):Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post('http://localhost:8000/api/user/create', user, httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error, null))
    )
   }
   deleteUserById (userId:number):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(`http://localhost:8000/api/user/delete/${userId}`, options);
  }
   updateUser(user:User) : Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.put(`http://localhost:8000/api/user/update/${user.id}`, user, httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error, null))
    )
 }
}

