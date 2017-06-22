import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



var config = {
    apiKey: "AIzaSyBHrYKd3govWRmTRSj4OgWNhq4maR5KI9o",
    authDomain: "angularfire-crud-1435b.firebaseapp.com",
    databaseURL: "https://angularfire-crud-1435b.firebaseio.com",
    projectId: "angularfire-crud-1435b",
    storageBucket: "angularfire-crud-1435b.appspot.com",
    messagingSenderId: "293211702518"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //import angularfire
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
