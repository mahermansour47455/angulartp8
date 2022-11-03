import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0
  constructor(private authService : AuthService,
    private Router:Router) { }

  ngOnInit(): void {
  }
  onLoggedin(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.Router.navigate(['/']);
    else
    //alert('Login ou mot de passe incorrecte!');
    this.erreur=1;
    }
    
    

}
