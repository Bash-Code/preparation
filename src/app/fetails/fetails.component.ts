import { Component, OnInit } from '@angular/core';
import {FilmserviceService} from "../filmservice.service";
import {ActivatedRoute} from "@angular/router";
import {Film} from "../Models/Film";

@Component({
  selector: 'app-fetails',
  templateUrl: './fetails.component.html',
  styleUrls: ['./fetails.component.css']
})
export class FetailsComponent implements OnInit {
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
