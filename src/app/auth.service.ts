import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private route : Router) { }

  login(email : string, password : string) : Observable<any>{
    const body = {email : email, password : password};
    return this.http.post("http://localhost:3000/users/auth", body)
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

}
