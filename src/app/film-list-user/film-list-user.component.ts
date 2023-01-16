import { Component, OnInit } from '@angular/core';
import {FilmserviceService} from "../filmservice.service";
import {Film} from "../Models/Film";
import {HttpClient} from "@angular/common/http";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-film-list-user',
  templateUrl: './film-list-user.component.html',
  styleUrls: ['./film-list-user.component.css']
})
export class FilmListUserComponent implements OnInit {

  constructor(private filmservice : FilmserviceService,private http : HttpClient) { }
  films : Film[] = [];
  name! : string;
  userId! : string;

  ngOnInit(): void {
    this.filmservice.getPopularMovies().then((data: any) => this.films = data.results);
  }

  onChange(){
    this.filmservice.SearchByName(this.name).then((data:any)=>this.films = data.results);
  }




}
