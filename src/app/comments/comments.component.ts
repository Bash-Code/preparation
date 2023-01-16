import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../Models/Film";
import {HttpClient} from "@angular/common/http";
import {response} from "express";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() film!: Film;
  Comment! : string;
  comments! : any[];
  isLoading : boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getComments();
  }

  CommentOnMovie(){
    const body = { "comment" : this.Comment, "userId" : localStorage.getItem('token'), "filmID" : this.film.id}
    this.http.post("http://localhost:3000/comments/add", body).subscribe(()=>{this.Comment = ''; this.getComments();},error => {
      console.log(error);
      alert('An error occurred while saving the comment.');
    })
  }

  getComments() {
    this.isLoading = true;
    this.http.get<string[]>(`http://localhost:3000/comments/get/${this.film.id}`)
      .subscribe(comments => {
        this.comments = comments;
        console.log(comments);
        console.log(this.comments);
        this.isLoading = false;
      }, error => {
        console.log(error);
        alert('An error occurred while loading the comments.');
        this.isLoading = false;
      });
  }




}
