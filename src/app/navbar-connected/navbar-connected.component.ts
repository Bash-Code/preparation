import { Component, OnInit } from '@angular/core';
import * as Http from "http";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar-connected',
  templateUrl: './navbar-connected.component.html',
  styleUrls: ['./navbar-connected.component.css']
})
export class NavbarConnectedComponent implements OnInit {
  user? : User;

  constructor(private http : HttpClient, private router : Router, private authService :AuthService) { }

  ngOnInit(): void {
  }

  goToFavoris(){
    this.router.navigate(['/favoris',localStorage.getItem('token')]);
  }

  logout(){
    this.authService.logout();
  }

  gotoHome(){
    this.router.navigate(['/connected',localStorage.getItem('token')]);
  }

}
