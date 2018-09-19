import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { GetGoogleFonts } from 'get-google-fonts';
import { NgwWowModule } from 'ngx-wow';
import { magnificPopup } from 'magnific-popup';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

//new GetGoogleFonts().download('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic');

