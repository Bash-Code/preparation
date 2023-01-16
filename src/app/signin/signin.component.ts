import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  SignIn = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required])
    },{validators : this.checkPasswords});


  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router : Router) {}
  ngOnInit(): void {}
  checkPasswords(control : AbstractControl) {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');
    if (password?.value !== passwordConfirm?.value) {
      return { passwordMatch: true };
    }
    return null;
  }

  createAccount(){
    const body = { "email" : this.SignIn.get('email')?.value, "password" : this.SignIn.get('password')?.value};
    this.http.post("http://localhost:3000/users/create", body).subscribe((response)=>{
      console.log('account created successfully',response);
      this.router.navigate(['/login']);
      },
      (error)=>{console.log(error)});
  }



}
