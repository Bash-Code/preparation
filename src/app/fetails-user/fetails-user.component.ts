import { Component, OnInit } from '@angular/core';
import {Film} from "../Models/Film";
import {FilmserviceService} from "../filmservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fetails-user',
  templateUrl: './fetails-user.component.html',
  styleUrls: ['./fetails-user.component.css']
})
export class FetailsUserComponent implements OnInit {

  paramValue!: string;
  film! : Film;

  constructor(private filmservice : FilmserviceService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramValue = <string>this.route.snapshot.paramMap.get('film.id');this.showMovieDetails(this.paramValue);
  }

  showMovieDetails(id : string){
    return this.filmservice.getMovieByID(id).then((data:any)=>this.film=data);
  }

}
