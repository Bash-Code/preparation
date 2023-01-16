import {Component, OnInit} from '@angular/core';
import {FilmserviceService} from "../filmservice.service";
import {Film} from "../Models/Film";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  constructor(private filmservice : FilmserviceService) { }
  films : Film[] = [];
  name! : string;

  ngOnInit(): void {
    this.filmservice.getPopularMovies().then((data:any)=> this.films = data.results);
  }

  onChange(){
    this.filmservice.SearchByName(this.name).then((data:any)=>this.films = data.results);
  }

}
