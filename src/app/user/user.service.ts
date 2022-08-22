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
    /* return POKEMONS;
    la réponse contiendra un tableau
    en param on passe une URL
    avec pipe on passe les traitements que l'on veut faire
      on log le pokémon
      si y'a une erreur on log l'erreur et on retourne un [] vide
      pour éviter le crash de l'appli*/
      //tap = console.log pour un Observable
    return this.http.get<User[]>('http://localhost:8000/api/user').pipe(
      tap((response)=> this.log(response)),
      catchError((error)=>this.handleError(error,[]))
      )
  }
  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);

    return of (errorValue);
  }
}

