import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isAuthenticaed = false;

  constructor(private router: Router, readonly authService: AuthService) {}
  
  ngOnInit(){
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if(isAuthenticated){
        this.router.navigateByUrl('/home');
      }
    });
  }
  
  login() {
    this.authService.loginWithRedirect();
  }
}
