import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "./Models/Film";

const API_KEY = "8fd964aa02f0c11b1efeae5674112441";
const API = "https://api.themoviedb.org/3/movie/popular?api_key="+API_KEY;
@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {
  film? : Film;

  constructor(private http : HttpClient) { }

  getPopularMovies(){
    return this.http.get(API).toPromise().then((response)=>response).catch((error)=>{console.log(error)});
  }

  getImageUrl(poster_path : string){
    return "https://image.tmdb.org/t/p/w500/"+poster_path;
  }

  getMovieByID(id : string){
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key="+API_KEY).toPromise().then((response)=>response).catch((error)=>console.log(error));
  }

  SearchByName(name : string){
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query="+name).toPromise().then((response)=>response).catch((error)=>console.log(error));
  }

}
