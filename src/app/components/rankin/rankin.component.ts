import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-rankin',
  templateUrl: './rankin.component.html',
  styleUrls: ['./rankin.component.scss']
})
export class RankinComponent {

  users: any;

  constructor(public userService: UsersService)
  {
    this.getUsers();
  }

  ngOnInit(){
  }

  getUsers(){
    this.userService.getUser().subscribe( data => {
      this.users = data;
    });
  }


}
