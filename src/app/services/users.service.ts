import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    let response: any = [];
    return this.http.post(environment.host.concat(environment.register), user).pipe(
      map(responseM => {
          response = responseM;
          return true;
      }),catchError(err =>{
        response = err
        return of(response)
      })
    );
  }
  login(user: any): Observable<any> {
    let response: any = [];
    let result = {}
    return this.http.get(environment.host.concat(environment.login), user).pipe(
      map(responseM => {
        response = responseM
        response.forEach((element: any) => {
          if(user.name === element.name && user.password === element.password){
            sessionStorage.setItem('nameApp', user.name);
            result = element;
          }
        });
        return result
      }),catchError(err =>{
        response = err
        return of(response)
      })
    );
  }
  getUser(): Observable<any> {
    let response: any = [];
    return this.http.get(environment.host.concat(environment.register)).pipe(
      map(responseM => {
          response = responseM;
          return response;
      }),catchError(err =>{
        response = err
        return of(response)
      })
    );
  }
} 
