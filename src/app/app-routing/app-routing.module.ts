import {Routes, RouterModule} from "@angular/router";
import {FilmListComponent} from "../film-list/film-list.component";
import {FetailsComponent} from "../fetails/fetails.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../login/login.component";
import {SigninComponent} from "../signin/signin.component";
import {FilmListUserComponent} from "../film-list-user/film-list-user.component";
import {FetailsUserComponent} from "../fetails-user/fetails-user.component";
import {FavorisComponent} from "../favoris/favoris.component";

const routes :Routes = [
  {path : '' , component : FilmListComponent},
  {path : 'connected/:token' , component : FilmListUserComponent},
  {path : 'sign-In' , component : SigninComponent},
  {path : 'details/:film.id', component : FetailsComponent},
  {path : 'details-user/:film.id', component : FetailsUserComponent},
  {path : 'favoris/:user.id', component : FavorisComponent},
  {path : 'login', component : LoginComponent}
]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule{}
