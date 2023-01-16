import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FetailsComponent } from './fetails/fetails.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FilmserviceService} from "./filmservice.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FilmListUserComponent } from './film-list-user/film-list-user.component';
import { NavbarConnectedComponent } from './navbar-connected/navbar-connected.component';
import { FavorisComponent } from './favoris/favoris.component';
import { CommentsComponent } from './comments/comments.component';
import { FilmItemUserComponent } from './film-item-user/film-item-user.component';
import { FetailsUserComponent } from './fetails-user/fetails-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    FilmListComponent,
    FetailsComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    FilmListUserComponent,
    NavbarConnectedComponent,
    FavorisComponent,
    CommentsComponent,
    FilmItemUserComponent,
    FetailsUserComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [FilmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
