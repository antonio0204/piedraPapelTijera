import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSidebarsComponent } from './navbar-sidebars/navbar-sidebars.component';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarSidebarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  exports:[
    NavbarSidebarsComponent,
  ]
})
export class SharedModule { }
