import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {HomeComponent} from './home/home.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {FooterComponent} from './footer/footer.component';
import {PatreonModule} from './patreon/patreon.module';
import {HeroSectionModule} from './hero-section/hero-section.module';
import {TeamSectionModule} from './team-section/team-section.module';
import {PartnersSectionModule} from './partners-section/partners-section.module';
import {AboutSectionComponent} from './about-section/about-section.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { DialogPersonComponent } from './dialog-person/dialog-person.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    FooterComponent,
    AboutSectionComponent,
    DialogPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    PatreonModule,
    HeroSectionModule,
    TeamSectionModule,
    PartnersSectionModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
