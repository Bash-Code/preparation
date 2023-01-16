import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmserviceService} from "../filmservice.service";
import {Film} from "../Models/Film";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film! : Film;
  @Output() filmSelected = new EventEmitter<Film>();

  constructor(private filmservice : FilmserviceService) { }

  ngOnInit(): void {

  }
  getImage(film_poster : any){
    return this.filmservice.getImageUrl(film_poster);
  }

}
