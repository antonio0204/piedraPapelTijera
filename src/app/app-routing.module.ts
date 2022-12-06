import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoginComponent } from './components/login/login.component';
import { RankinComponent } from './components/rankin/rankin.component';

const routes: Routes = [
  { path: '', 
  component: LoginComponent,  
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'home', 
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'instrucciones',
    component: InstructionsComponent,
    canActivate: []
  },
  {
    path: 'rankin',
    component: RankinComponent,
    canActivate: []
  },
  { path: '**',
    redirectTo: 'login', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
