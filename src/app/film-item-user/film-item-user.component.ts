import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../Models/Film";
import {FilmserviceService} from "../filmservice.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-film-item-user',
  templateUrl: './film-item-user.component.html',
  styleUrls: ['./film-item-user.component.css']
})
export class FilmItemUserComponent implements OnInit {

  @Input() film! : Film;
  @Output() filmSelected = new EventEmitter<Film>();

  constructor(private filmservice : FilmserviceService, private http : HttpClient) { }

  ngOnInit(): void {

  }
  getImage(film_poster : any){
    return this.filmservice.getImageUrl(film_poster);
  }

  addtoFavoris(){
    console.log(localStorage.getItem('token'));
    console.log(this.film.id);
    console.log(this.film.poster_path);
    const body = {"userId": localStorage.getItem('token'), "title" : this.film.title, "original_title" : this.film.ooriginal_title, "poster_path" : this.film.poster_path, "release_date" : this.film.release_date, "overview" : this.film.overview }
    this.http.post("http://localhost:3000/favoris/add", body).subscribe((response)=>{console.log('movie added to favorites',response)},
      (error)=>{console.log(error)});
  }

}
