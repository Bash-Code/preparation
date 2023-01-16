import { Component, OnInit } from '@angular/core';
import {Film} from "../Models/Film";
import {HttpClient} from "@angular/common/http";
import {FilmserviceService} from "../filmservice.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  film : Film[] = [];

  constructor(private http : HttpClient, private filmService : FilmserviceService) { }

  ngOnInit(): void {
    this.getFavMovies().then((data: any)=>{this.film = data});
  }

  getFavMovies(){
    return this.http.get(`http://localhost:3000/favoris/get/${localStorage.getItem('token')}`).toPromise().then((response)=>response).catch((error) => {console.log(error)});
  }

  getImage(film_poster : any){
    return this.filmService.getImageUrl(film_poster);
  }


}
