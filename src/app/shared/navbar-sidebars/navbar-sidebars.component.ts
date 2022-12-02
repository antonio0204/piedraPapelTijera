import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-sidebars',
  templateUrl: './navbar-sidebars.component.html',
  styleUrls: ['./navbar-sidebars.component.scss']
})
export class NavbarSidebarsComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(){
  }

  logout() {
    this.authService.logout();
    sessionStorage.removeItem('loggedIn');
  }

}
