import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HomeComponent } from './home/home.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
