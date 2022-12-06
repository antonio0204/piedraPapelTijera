import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-sidebars',
  templateUrl: './navbar-sidebars.component.html',
  styleUrls: ['./navbar-sidebars.component.scss']
})
export class NavbarSidebarsComponent implements OnInit {
  
  name: any = '';
  points: any;

  constructor(readonly user: UsersService, readonly route: Router) {}

  ngOnInit(){
    this.name = sessionStorage.getItem('nameApp');
    this.points = sessionStorage.getItem('points');
  }
  logout() {
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
