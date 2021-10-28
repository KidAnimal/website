import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { ProgrammingComponent } from './programming/programming.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortfolioHomeComponent } from './home/portfolio-home/portfolio-home.component';
import { AboutHomeComponent } from './home/about-home/about-home.component';
import { ContactComponent } from './contact/contact.component';
import { HeroHomeComponent } from './home/hero-home/hero-home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    IllustrationComponent,
    ProgrammingComponent,
    NavbarComponent,
    ContactComponent,
    AboutHomeComponent,
    PortfolioHomeComponent,
    HeroHomeComponent,
    IntroductionComponent,
    SocialLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
