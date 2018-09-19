import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgwWowModule } from 'ngx-wow';
import { OwlModule } from 'ngx-owl-carousel';
import { CountUpModule } from 'countup.js-angular2';
// import 'owl.carousel2/dist/assets/owl.carousel.css';
// import $ from 'jquery';
// import 'imports?jQuery=jquery!owl.carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { StatsComponent } from './stats/stats.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    WorkComponent,
    TeamComponent,
    TestimonialsComponent,
    PricingComponent,
    StatsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AngularFontAwesomeModule,
    NgwWowModule.forRoot(),
    OwlModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
