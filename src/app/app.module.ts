import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// *.4 Elimino HomePage de declarations y de EntryComponents:
// *.5 Elimino import de HomePage:
// *.6 Descargo librerias de angular/firebase2
// npm install angularfire2 firebase promise-polyfill --save
// npm install rxjs@6.0 rxjs-compat --save
// Esta íltima linea para bajar rxjs a v6.0 porque la 6.3.3 funciona mal

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
