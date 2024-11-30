import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'copilot', component: LoginComponent },
  { path: 'functionality', component: FunctionalityComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FunctionalityComponent,
    LandingPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
