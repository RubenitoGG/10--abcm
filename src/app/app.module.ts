import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// *.7 Despues de crear el proyecto en firebase.com importamos:
// *.10 Muy importante permisos firebase:
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListaCompraProvider } from '../providers/lista-compra/lista-compra';

// *.8 Completo la constante con lo que copio de firebase.com => miProyecto:
export const firebaseConfig = {
  apiKey: "AIzaSyAvUl0KEvHvmx_bQfNi9eFz5-aNXsODuNk",
  authDomain: "abcm-78581.firebaseapp.com",
  databaseURL: "https://abcm-78581.firebaseio.com",
  projectId: "abcm-78581",
  storageBucket: "abcm-78581.appspot.com",
  messagingSenderId: "1046683221165"
};

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
    IonicModule.forRoot(MyApp),
    // *.9:
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListaCompraProvider,
    ListaCompraProvider
  ]
})
export class AppModule { }
