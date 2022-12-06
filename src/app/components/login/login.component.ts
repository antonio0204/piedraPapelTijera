import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formGroup: FormGroup =  new FormGroup({});

  constructor(private router: Router, readonly authService: AuthService, public userService: UsersService)
  {}

  ngOnInit(){
    this.buildForm();
  }
  private buildForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }
  login() {
    const user = {name: this.formGroup.value.name.toLowerCase(), password: this.formGroup.value.password};
    this.userService.login(user).subscribe( data => {
      if(data.name === null || data.name === undefined){
        alert('registrate')
      }
      else{
        this.router.navigateByUrl('/home');
      }
    });
  }
  register(){
    const user = {name: this.formGroup.value.name, password: this.formGroup.value.password};
    this.userService.register(user).subscribe( data => {
      if(data === true){
        alert('se guardo exitosamente, puedes Iniciar sesion!')
      }
    });
  }
}
