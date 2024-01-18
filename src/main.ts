import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { routes } from './app/app.routes';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { firebaseConfig } from './app/firebase';
import { AngularFireModule } from '@Angular/fire/compat';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig))
  ]
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
