import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { RankinComponent } from './components/rankin/rankin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InstructionsComponent,
    RankinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'ronald0204.us.auth0.com',
      clientId: 'xnGidsQ2iIq5G3RWSi5ftns6N4w2xpi8',
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }



